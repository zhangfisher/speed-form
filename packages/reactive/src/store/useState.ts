import {  RequiredComputedState } from "../computed/types"
import { StateGetter, StateSetter } from "./types"
import { IStore, Dict } from "../types"


 
/**
 *  StateGetter函数返回
 *
 *  [ fullName,setFullName ] = useState(
 *      (state)=>state.user.firstName+state.user.lastName,
 *      (state,fullName:[string,string])=>{
 *        state.user.firstName = fullName[0]
 *        state.user.lastName = fullName[1]
 *  })
 *   
 *   setFullName(['zhang','fisher])
 *
 * @param useState
 */
export function createUseState<T extends Dict>(store:IStore<T>){
    type StateType = IStore<T>['state']
    return function<Value=StateType,SetValue=Value>(
        getter?:StateGetter<StateType,Value>,
        setter?:StateSetter<StateType,SetValue>
    ):[Value,(value:SetValue)=>void]{
        const useState = store.reactiveable.useState<Value,SetValue> 
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
 
