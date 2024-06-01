import { getSnap  } from "helux" 
import { setVal } from "../utils/setVal"
import { WatchListener, WatchOptions, WatchDescriptor } from './types';
import { Dict,  IStore, StoreDefine } from "../types"
import { getVal } from "../utils/getVal"
import { OBJECT_PATH_DELIMITER } from "../consts" 
import { getRndId } from "../utils/getRndId";
import { joinValuePath } from "../utils"; 
 

export class WatchObject<T extends StoreDefine> {
    private _cache?: Dict
    private _listener:WatchListener 
    private _options: Required<WatchOptions>
    constructor(public store:IStore<T>,descriptor:WatchDescriptor){        
        this._options = Object.assign({ 
            enable:true,
            selfPath: [],
            group:undefined,
            context:undefined,
            initial:undefined 
        },descriptor.options) as Required<WatchOptions>
        if(typeof(this._options.depends)!=='function') throw new Error("watch options.depends must be a function")        
            // 如果没有id则生成一个id
        if(!this._options.id){
            const selfPath = this._options.selfPath
            this._options.id = this._options.id || 
                this._options.context ?  getRndId() : joinValuePath(selfPath) 
        }
        this._listener = descriptor.listener
    }
    get id(){ return this._options.id!}
    get options(){ return this._options}
    get selfPath(){ return this._options.selfPath!}
    get depends(){ return this._options.depends!}
    get enable(){ return this._options.enable!}
    set enable(value:boolean){ this._options.enable = value}
    get cache(){
        if(!this._cache) this._cache = {}
        return this._cache!
    }
    /**
     * 返回当前watch处理后的,即listener的返回值
     * @returns 
     */
    get value(){
        const ctx = this._options.context ?  this._options.context : this.store.state
        return getVal(getSnap(ctx),this.selfPath)
    }    
    private getName(){
        return this._options.context ? this.id : this.selfPath.join(OBJECT_PATH_DELIMITER)
    }
    reset(){
        this._cache = {}
    } 
    /**
     * 运行侦听函数
     * @param watchPath 
     * @returns 
     */
    run(watchPath:string[],watchValue:any){   
        // 1. 检查是否启用
        if(!this.enable) {
            this.store.options.log!(`WatchObject <${this.getName()}> is disabled`)
            return 
        } 
        try{
            // 2.  执行监听函数
            const result = this._listener.call(this,watchValue,watchPath,this as any)    

            // 3. 将返回值回写到状态中
            if(result!==undefined){            
                if(this._options.context ){
                    this._options.context.setState((draft:any)=>{
                        draft.value=result
                    })
                }else{ // 回写到原地
                    this.store.setState((draft:any)=>{
                        setVal(draft,this.selfPath,result)
                    })
                }            
            }    
        }catch{

        }        
    }  

}
 