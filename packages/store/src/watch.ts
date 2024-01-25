/**
 *  
 * 
 */
import { watch as heluxWatch } from "helux";


export interface WatchOptions{
    immediate?:boolean    
    depends?:()=>any
    // 指定额外的过滤条件，如果返回true，才会触发listener的执行
    filter?:(valuePath:string[])=>boolean
}

export interface WatchResult{
    off?:boolean
}

/**
 * 用来监听状态的变化
 * computed(()=>{},[])
 * watch(()=>{
 *      
 * },{
 *  depends:()=>[state],
 *  filter:(valuePath)=>valuePath.startsWith('user')
 * })
 * 
 * @param listener 
 * @param options 
 * @returns 
 */
export function watch(listener:(params:any)=>void,options?:WatchOptions):()=>void{
    const opts=Object.assign({
        immediate:true,
        depends:()=>[]
    },options)

    // @ts-ignore
    const {unwatch} = heluxWatch(({triggerReasons})=>{
        const valuePaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath)
        listener(triggerReasons)
    },opts.depends)
    return unwatch
}

 

