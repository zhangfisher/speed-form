import { Dict } from "@speedform/reactive"
import type { FormStore, RequiredFormOptions } from "./form"
import { createActionComponent } from "./action"

export function createResetComponent<State extends Dict = Dict>(store:FormStore<State>,formOptions:RequiredFormOptions<State>) {
    const Action = createActionComponent(store)
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
