import {  RequiredComputedState } from "../computed/types"
import { StateGetter, StateSetter } from "./types"
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
export function createUseState<T extends StoreDefine>(store:IStore<T>){

    return function<Value=any,SetValue=Value>(
        getter?:StateGetter<RequiredComputedState<T>,Value>,
        setter?:StateSetter<RequiredComputedState<T>,SetValue>
    ){
        const useState =store.reactiveable.useState 
        if(getter==undefined){
            return useState()
        }
        const [ state,setState ] = useState()
        const value = getter(state as RequiredComputedState<T>)
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
 
