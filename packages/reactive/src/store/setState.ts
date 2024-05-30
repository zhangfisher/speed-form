import { IStore, StoreDefine } from "../types"


 
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
export function createSetState<T extends StoreDefine>(store: IStore<T>){

    return (updater:(draft:T)=>void)=>{
        // @ts-ignore
        store.stateCtx.setState((draft:any)=>{
            updater(draft as any)
        })
    }
}
 
