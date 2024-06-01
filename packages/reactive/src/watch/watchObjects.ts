import { ISharedCtx, getSnap,watch as heluxWatch } from "helux"
import { ComputedScopeRef } from "../store/types"
import { setVal } from "../utils/setVal"
import { WatchListener, WatchOptions, WatchDescriptor, WatchDepends } from './types';
import { Dict, IState, IStore, StoreDefine } from "../types"
import { getVal } from "../utils/getVal"
import { OBJECT_PATH_DELIMITER } from "../consts"
import { getComputedContext } from "../context"
import { getRndId } from "../utils/getRndId";
import { joinValuePath } from "../utils"; 

export interface RegisteredWatchListener{
    fn:WatchListener                // 侦听函数       
    options:WatchOptions            // 侦听函数的选项
}

 
 

export class WatchObject<T extends StoreDefine> {
    private _cache?: Dict
    private _listener:WatchListener 
    private _options:WatchOptions
    constructor(public store:IStore<T>,descriptor:WatchDescriptor){        
        this._options = descriptor.options
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
     /**
     * 运行侦听函数
     * @param fromPath 
     * @returns 
     */
    run(fromPath:string[]){   
        // 1. 检查是否启用
        if(!this.options.enable) {
            this.store.options.log!(`WatchObject <${this.getName()}> is disabled`)
            return 
        } 
        // 2.  执行监听函数
        const result = this._listener.call(this,fromPath,this.value,this as any)    

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
    }  

}

export class WatchObjects<T extends StoreDefine> extends Map<string,WatchObject<T>>{
    private _off?:()=>{} 
    private _enable:boolean=true                            // 是否启用侦听器
    constructor(public store:IStore<T>){
        super()   
        store.on("created",this.onStateCreated.bind(this))
    }  
    private onStateCreated(){ 
        this.createWacher() 
    }
    get enable(){
        return this._enable
    }
    set enable(value:boolean){
        this._enable = value
    }     
    delete(key: string): boolean {
        const watcher = this.get(key)         
        return super.delete(key)
    }
    /**
     * 根据路径生成唯一的key
     * 使用连接符将Key连接起来
     * @param valuePath 
     * @returns 
     */
    private getValueKey(valuePath:string | string[]){
        return joinValuePath([valuePath]) 
    }  
    /**
     * 创建全局侦听器,
     * 此侦听器会侦听根对象，当对象所有的状态变化,会执行所有监听过滤函数，如果返回true，则执行对应的监听函数
     * 负责处理动态侦听
     */
    private createWacher(){
        // @ts-ignore
        const { unwatch } = heluxWatch(({triggerReasons})=>{
            if(!this._enable) return 
            const fromPaths:string[][] = triggerReasons.map((reason:any)=>reason.keyPath) 
            fromPaths.forEach((fromPath)=>{  
                for(let watchObj of this.values()){
                    try{
                        watchObj.run(fromPath)
                    }catch{}
                }                
            })
        },()=>[this.store.state])
        this._off = unwatch
    } 
    /**
     * 重置侦听器
     */
    reset(){
        this._off && this._off()
        this.createWacher()
    }
   
    /**
     * 添加一个侦听器对象  
     * @param selfPath              侦听函数所在的路径,用来接收侦听函数的返回值，当使用useWatch时
     * @param listener              侦听函数 
     * @param options               参数
     * @param watchTo               侦听结果写到处下载
     * @returns 
     */
    add(descriptor:WatchDescriptor){
        const watchObject  = new WatchObject(this.store,descriptor)
        this.set(watchObject.id,watchObject)
        return watchObject
    }
    /**
     * 控制某个组的侦听器是否启用
     * @param groupName 
     * @param value 
     */
    enableGroup(groupName:string,value:boolean=true){
        for(const watcher of this.values()){
            if(watcher.options.group==groupName){
                watcher.options.enable = value
            }
        }
    }



}