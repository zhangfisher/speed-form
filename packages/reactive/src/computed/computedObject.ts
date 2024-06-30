import { Reactiveable } from "../reactives/types"
import {  IStore, Dict } from "../types" 
import { getVal } from "../utils/getVal"
import { ComputedOptions, RuntimeComputedOptions } from "./types"

 
export class ComputedObject<T extends Dict = Dict,R=any> {
    options:Required<ComputedOptions>
    constructor(public store:IStore<T>,public selfReactiveable:Reactiveable<any> | undefined,public path:string[],options:ComputedOptions){
        this.options  = Object.assign({
        },options) as Required<ComputedOptions>
    }
    get id(){return this.options.id }
    get enable(){ return this.options.enable  }
    get group(){return this.options.group}
    set enable(value:boolean){ this.options.enable = value }
    get async(){return this.options.async}
    get depends(){return this.options.depends}   
    get value(){
        return getVal(this.selfReactiveable ? this.selfReactiveable?.state : this.store.state,this.path)
    }      
    run(options?:RuntimeComputedOptions) {
        return this.store.reactiveable?.runComputed(this.id,options)
    }
    cancel(){
        if(this.async){
            this.value.cancel()
        }else{
            throw new Error("cancel only works for async computed")
        }        
    }

}

