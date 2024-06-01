import { IStore, StoreDefine } from "../types"
import { ComputedOptions, RuntimeComputedOptions } from "./types"

// id:string
// mutate:IMutateWitness<ComputedState<T>>
// run:(options?:RuntimeComputedOptions)=>Promise<any> | any
// options:ComputedOptions  
// group:string | undefined
// async:boolean
// enable:boolean
// {
//     id:mutateName,
//     mutate,
//     group:computedOptions.group,
//     async:true,
//     options:computedOptions,
    

//   }

export class ComputedObject<T extends StoreDefine =StoreDefine> {
    options:Required<ComputedOptions>
    constructor(public store:IStore<T>,options:ComputedOptions){
        this.options  = Object.assign({
            
        },options) as Required<ComputedOptions>
    }
    get enable(){ return this.options.enable as boolean }
    set enable(value:boolean){ this.options.enable = value }
    run(options?:RuntimeComputedOptions) {
        const params = {desc:mutateId,extraArgs:options}
        return isExternal ? computedTo.stateCtx.runMutateTask(params) : store.stateCtx.runMutateTask(params)
      }
}