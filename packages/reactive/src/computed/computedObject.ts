import { Reactiveable } from "../reactives/types"
import {  IStore, Dict } from "../types" 
import { getVal } from "../utils/getVal"
import { ComputedOptions, RuntimeComputedOptions } from "./types"

 
export class ComputedObject<T extends Dict = Dict,R=any> {
    options:Required<ComputedOptions>
    private _value:any
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
        //if(this._value===undefined){
            return    this._value = getVal(this.selfReactiveable ? this.selfReactiveable?.state : this.store.state,this.path)
        //}        
        //return this._value as R
    }      
    run(options?:RuntimeComputedOptions) {
        return this.store.reactiveable?.runComputed(this.id,options)
    }
    cancel(){
        
    }

}

