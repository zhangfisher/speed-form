import { ITargetState, IStore, Dict } from "../types"
import { getComputedId } from "../utils/getComputedId"
import { ComputedOptions, RuntimeComputedOptions } from "./types"

 
export class ComputedObject<T extends Dict = Dict> {
    options:Required<ComputedOptions>
    constructor(public store:IStore<T>,public selfState:ITargetState<T> | undefined,public path:string[],options:ComputedOptions){
        this.options  = Object.assign({
        },options) as Required<ComputedOptions>
    }
    get id(){return getComputedId(this.options.selfPath, this.options.id) }
    get enable(){ return this.options.enable  }
    get group(){return this.options.group}
    set enable(value:boolean){ this.options.enable = value }
    get async(){return this.options.async}
    get depends(){return this.options.depends} 
    run(options?:RuntimeComputedOptions) {
        return this.store.reactiveable?.runComputed(this.id,options)
    }
    cancel(){
        
    }

}

