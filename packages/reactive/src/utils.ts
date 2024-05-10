import { ISharedCtx } from 'helux'
import type { ComputedDepends, ComputedOptions } from './computed'
import { OBJECT_PATH_DELIMITER } from './consts'
import { Dict, RequiredComputedState } from './types'
import type { StateGetter, StateSetter } from './store'



export function getValueByPath(state:any,path?:string | string[] | ((state:any)=>string | string[]),delimiter=OBJECT_PATH_DELIMITER){
    let paths:string[] = []
    try{
        if(typeof(path)=== 'function'){
            path = path.call(state,state)
        }
        paths = Array.isArray(path) ? path : (typeof(path)=='string' ? path.split(delimiter) : [])    
        return paths.length > 0 ? getVal(state,paths) : state
    }catch{
        return state
    }
}


export const SKIP_COMPUTED= Symbol('SKIP_COMPUTED')

/**
 * 
 * 用来在状态中标识一个函数，该函数不会被转换为计算属性函数
 * 
 */
export function skipComputed(fn:Function){
    // @ts-ignore
    fn[SKIP_COMPUTED] = true
    return fn
}

export function isSkipComputed(fn:Function){
    // @ts-ignore
    return fn[SKIP_COMPUTED] === true

    
}

export function log(message:any,level:'log' | 'error' | 'warn'='log'){
    let msg = typeof(message) === 'function' ? message() : (message instanceof Error ? message.stack : message)
    try{
        console[level]("[@speedform/reactive] ",...Array.isArray(msg) ? msg : [msg])
    }catch{}
}


/**
 * 根据相对路径获取值的路径
 * 
如valuePath =[ 'a', 'b', 'c', 'd', 'e', 'f' ]
self =  [ 'a', 'b', 'c', 'd', 'e', 'f' ]
root =  []
parent =  [ 'a', 'b', 'c', 'd' ]
current =  [ 'a', 'b', 'c', 'd', 'e' ]
['a','b'] =  [ 'a', 'b' ]
m =  [ 'a', 'b', 'c', 'd', 'e', 'm' ]
x =  [ 'a', 'b', 'c', 'd', 'e', 'x' ]
./x =  [ 'a', 'b', 'c', 'd', 'e', 'x' ]
../x =  [ 'a', 'b', 'c', 'd', 'x' ]
../../x =  [ 'a', 'b', 'c', 'x' ]
../../../x =  [ 'a', 'b', 'x' ]
../../../../x =  [ 'a', 'x' ]
../../../../../x =  [ 'x' ]
../../../../../../x =  [ 'x' ]
 * 
 * 
 * @param path 
 * @param relPath 
 * @returns 
 */
export function getRelValuePath(path:string[],relPath:'self' | 'root' | 'parent' | 'current' | string[] | string ):string[]{
    if(!Array.isArray(path)) throw new Error('path must be an array')
    if(relPath  === 'self'){
        return path
    }else if(relPath === 'root'){
        return []
    }else if(relPath === 'parent'){
        return path.slice(0,-2)
    }else if(relPath === 'current'){
        return path.slice(0,-1)
    }else if(typeof(relPath) === 'string'){        
        // 字符串支持相对路径语法，如"../" 或 "./" 或 "xxx"
        if(relPath.startsWith('./')){
            return [...path.slice(0,-1),...relPath.slice(2).split(OBJECT_PATH_DELIMITER)]
        }else if(relPath.startsWith('../')){ // 父路径
            return getRelValuePath(path.slice(0,-1),relPath.slice(3))
        }else{
            // 如果路径中包含"."，则自动转换为"/"并给出警告
            // 使用/路径分割符的原因是，可以使用./或../等相对路径语法
            if(relPath.includes(".")){
                console.warn('[@speedform/reactive] The dependency path uses "/" as the separator, and will automatically convert')
                relPath=relPath.replaceAll(".","/")
            }
            return [...path.slice(0,-1),...relPath.split(OBJECT_PATH_DELIMITER)]
        }
    }else if(Array.isArray(relPath)){
        return relPath
    }
    return path    
}


export function joinValuePath(paths:(string | string[])[]):string{
    return paths.map((p)=>{
        return Array.isArray(p) ? p.join(".") : p
    }).join('_')
}
 

export function getError(e:any):Error{
    return  e instanceof Error ? e : new Error(e)
}

/**
 * 用来将依赖参数转换为数组
 * @param arg 返回 [[],[],[],"./ddd","../../xxxxx",[]]
 */
export function getDeps(arg:ComputedDepends | undefined,ctx?:any):(string | string[])[]{
    return (arg || []).map((dep: any) =>{
        if(Array.isArray(dep)){
            return dep
        }else if(typeof(dep)=='string'){
            if(dep.startsWith("./") || dep.startsWith("../")){
                return dep
            }else{
                return dep.includes(OBJECT_PATH_DELIMITER) ? dep.split(OBJECT_PATH_DELIMITER) : dep.split(".")
            } 
        }else{
            return []
        }
    })
}


/**
 * depends:["./first/cc/fff","../","/sss",'self']
 *  
 * 
 */
export function getDepValues(deps:any[],draft:any,curValuePath:string[]){
    return deps.map((dep)=>{ 
        return getVal(draft,getRelValuePath(curValuePath,dep))
    })
}

/**
 *  判断一个路径destPath是否包含另一个路径basePath判断
 * @param basePath 
 * @param destPath 
 */
export function isIncludePath(basePath:string[],destPath:string[]){
    if(basePath.length>destPath.length) return false
    return basePath.every((p,i)=>{
        return p===destPath[i]
    })
}

 

export function isMap(mayMap: any) {
    return toString.call(mayMap) === '[object Map]';;
  }

/**
 * string 获取不到，尝试转为 number 获取
 */
export function getMapVal(map: Map<any, any>, key: string) {
    const strKeyVal = map.get(key);
    if (strKeyVal !== undefined) {
      return strKeyVal;
    }
    const numKeyVal = map.get(Number(key) || key);
    if (numKeyVal !== undefined) {
      return numKeyVal;
    }
    return undefined;
  }
  
  export function getVal(obj: any, keyPath: string[]): any {
    if(keyPath.length === 0) return obj
    let val;
    let parent = obj;
    keyPath.forEach((key) => {
      // console.log('\nisMap(parent)', isMap(parent));
      // console.log('parent', parent);
      // console.log('key', key);
      val = isMap(parent) ? getMapVal(parent, key) : parent[key];
      // val = parent[key];
      // console.log('val', val);
      parent = val;
    });
    return val;
  }
  
export function setVal(obj: any, keyPath: string[], val: any) {
    let parent = obj;
    const lastIdx = keyPath.length - 1;
    keyPath.forEach((key, idx) => {
      const isMapObj = isMap(parent);
      if (idx === lastIdx) {
        isMapObj ? parent.set(key, val) : (parent[key] = val);
        return;
      }
      const subVal = isMapObj ? getMapVal(parent, key) : parent[key];
      parent = subVal; // for next forEach scb
    });
}


export function isPromise(obj:any){
    return (typeof(obj)=='function' && obj.then && typeof(obj.then)=='function') || (obj && obj instanceof Promise)

}


/**
 * 判断是否是一个异步计算对象
 * @param obj 
 * @returns 
 */
export function isAsyncComputedObject(obj:any){
    return typeof(obj)=='object' && ["result","loading","timeout","retry","run"].every(s=>obj.hasOwnProperty(s))
}


export function isAsyncComputedDescriptor(obj:any){
    return typeof(obj)=='object' 
        && obj.hasOwnProperty("__COMPUTED__") 
        && ["async","sync"].includes(obj.__COMPUTED__)
        && obj.hasOwnProperty("fn")  && typeof(obj.fn)=='function'
        && obj.hasOwnProperty("options") && typeof(obj.options)=='object'
}


/**
 *  StateGetter函数返回
 *
 *  [ fullName,setFullName ] = useState<string,[string,string]>((state)=>state.user.firstName+state.user.lastName,(state,fullName:[string,string])=>{
 *        state.user.firstName = fullName[0]
 *        state.user.lastName = fullName[1]
 *  })
 *
 *
 * @param useState
 */
export function useStateWrapper<State extends Dict>(stateCtx:ISharedCtx<State["state"]>){
    return function<Value=any,SetValue=Value>(getter?:StateGetter<RequiredComputedState<State>,Value>,setter?:StateSetter<RequiredComputedState<State>,SetValue>){
        const useState = stateCtx.useState 
        if(getter==undefined){
            return useState()
        }
        const [ state,setState ] = useState()
        const value = getter(state)
        // @ts-ignore
        let setValue = setState
        if( typeof(setter)=='function' ){
            // @ts-ignore
            setValue=(value:SetValue)=>{
                // @ts-ignore
                setState((draft)=>{
                    setter.call(draft,draft,value)
                })                
            }
        }
        return [ value,setValue ]
    }
}
 
/**
 * 生成计算属性的id
 * @param valuePath 
 * @param idArg 
 * @returns 
 */
export function getComputedId(valuePath:string[],idArg:ComputedOptions['id']){
    let id = ''
    if(typeof idArg == 'function'){
      id = idArg(valuePath)
    }else if(typeof idArg == 'string' ) {
      id = idArg
    }else{
      id = joinValuePath(valuePath)
    }
    return id 
  }