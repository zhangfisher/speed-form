/**
 * 
 * 
 * 
 * 
 * 
 * const off = watch(()=>state.aa.bb.cc)
 * off()        // 取消监听
 * 
 * 
 */
import { watch as heluxWatch } from "helux";


export interface WatchOptions{
    immediate?:boolean
    depends?:string | string[] | any[]
}

export interface WatchResult{
    off?:boolean
}


export function watch(listener:()=>void,options?:WatchOptions):()=>void{
    const {unwatch} = heluxWatch(()=>{
        listener()
    },{
        immediate:options?.immediate
    })
    return unwatch
}