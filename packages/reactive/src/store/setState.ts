import { IStore, Dict, ComputedState } from "../types"


 
/**
 *  StateGetter函数返回
 *
 *  [ fullName,setFullName ] = store.setState<string,[string,string]>((state)=>state.user.firstName+state.user.lastName,(state,fullName:[string,string])=>{
 *        state.user.firstName = fullName[0]
 *        state.user.lastName = fullName[1]
 *  })
 *
 *
 * @param useState
 */
export function createSetState<State extends Dict>(store: IStore<State>){
    return (updater:(draft:ComputedState<State>)=>void)=>{        
        // @ts-ignore
        store.reactiveable.setState((draft:any)=>{
            updater(draft as any)
        })
    }
}
 
