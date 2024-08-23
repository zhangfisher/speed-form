import { Dict } from "@speedform/reactive"
import type { FormStore, RequiredFormOptions } from "./form"
import { action, ActionProps, createActionComponent } from "./action"
import { DEFAULT_RESET_ACTION } from "./consts"

export type ResetComponentProps = React.PropsWithChildren<{
    label?:string
} & ActionProps>


export function createResetComponent<State extends Dict = Dict>(store:FormStore<State>,formOptions:RequiredFormOptions<State>) {
    const Action = createActionComponent(store)
    return (props:ResetComponentProps)=>{
        return <Action  {...props} name={DEFAULT_RESET_ACTION}>        
            {
                ({loading,title})=>{
                    return (
                        <div className="speedform-reset">
                            <input type="reset" value={props.label || title} />                        
                            <span>{loading ? '提交中' : '已提交'}</span>
                    </div>)
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
    execute: action(async () => {
        
    })
} 