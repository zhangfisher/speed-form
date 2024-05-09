import { Dict } from "@speedform/reactive"
import type { FormOptions } from "./form"
import { createActionComponent } from "./action"

export function createResetComponent<Store extends Dict = Dict>(store:Store,formOptions?:Required<FormOptions>) {
    const Action = createActionComponent(store,{},formOptions)
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
