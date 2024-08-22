import { Dict } from "@speedform/reactive"
import type { FormStore, RequiredFormOptions } from "./form"
import { createActionComponent } from "./action"
import { DEFAULT_RESET_ACTION } from "./consts"

export function createResetComponent<State extends Dict = Dict>(store:FormStore<State>,formOptions:RequiredFormOptions<State>) {
    const Action = createActionComponent(store)
    return (props:any)=>{
        return <Action name={DEFAULT_RESET_ACTION}>        
            {
                (actionProps)=>{
                    return <input type="submit" value={props.title} />
                }
            }
        </Action>
    }

}

// 默认的重置动作
export const $reset = {
    title: "重置",
    help: "",
    tips: "重置",
    visible: true,
    enable: true,
    validate: true,
    readonly: false,
    execute: async () => {
        
    }
} 