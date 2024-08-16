import {  RequiredComputedState } from "../computed/types"
import { StateGetter, StateSetter } from "./types"
import { IStore, Dict } from "../types"


 
/**
 *  StateGetter函数返回
 *
 *  const [ fullName,setFullName ] = useState(
 *      (state)=>state.user.firstName+state.user.lastName
 *  })
 *   
 *   setFullName((draft)=>{draft.user.firstName='zhang';draft.user.lastName='fisher'})
 *
 * @param useState
 */
export function createUseState<T extends Dict>(store:IStore<T>){
    type StateType = IStore<T>['state']
    return function<Value=StateType>(getter?:StateGetter<StateType,Value>):[Value,(updater:(draft:StateType)=>void)=>void]{ 
        const useState = store.reactiveable.useState.bind(store.reactiveable)
        if(getter==undefined){
            return useState()  
        }
        const [ state,setState ] = useState()
        const value = getter(state as RequiredComputedState<T>) 
        return [ value,setState ]
    }
}
 
