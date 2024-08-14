import { Dict, IStore } from "@speedform/reactive"
import type { FormOptions, RequiredFormOptions } from "./form"
import { createActionComponent } from "./action"

export function createResetComponent<State extends Dict = Dict>(store:IStore<State>,formOptions:RequiredFormOptions<State>) {
    const Action = createActionComponent(store,formOptions)
    return (props:any)=>{
        return <Action name="ffff">        
            {
                (actionProps)=>{
                    return <input type="submit" value={props.title} />
                }
            }
        </Action>
    }

}
