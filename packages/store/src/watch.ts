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
import { watch as heluxWatch} from "helux";


export interface WatchOptions{
    immediate?:boolean
}

export interface WatchResult{
    off?:boolean
}


export function watch(listener:()=>void,depends: () => any[] ,options?:WatchOptions):()=>void{
    const {unwatch} = heluxWatch(()=>{
        listener()
    },{
        immediate:options?.immediate,
        deps:depends
    })
    return unwatch
}