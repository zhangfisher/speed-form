import { IState, IStore, StoreDefine } from "../types"
import { getComputedId } from "../utils/getComputedId"
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
    constructor(public store:IStore<T>,public attachState:IState<T>,options:ComputedOptions){
        this.options  = Object.assign({

        },options) as Required<ComputedOptions>
    }
    get id(){return getComputedId(this.options.selfPath, this.options.id) }
    get enable(){ return this.options.enable  }
    get group(){return this.options.group}
    set enable(value:boolean){ this.options.enable = value }
    get async(){return this.options.async}
    run(options?:RuntimeComputedOptions) {
        return this.store.reactive.runMutate(this.id,options)
    }
}

