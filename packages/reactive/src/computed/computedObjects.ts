import { ComputedObject} from "./computedObject"
import { computedObjectCreator } from './create';
import type { IStore } from "../store/types";
import { Dict, RuntimeComputedOptions } from "../types";


   /**
    * 
    */
export class ComputedObjects<T extends Dict =  Dict> extends Map<string,ComputedObject<T>>{
    private _createComputed?:ReturnType<typeof computedObjectCreator<T>>
    constructor(public store:IStore<T>){
      super()
    }
    /**
     * 运行指定组的计算函数
     *  
     * 
     * @param string 
     * @param 
     * @param string 
     * @param param3 
     */
    async runGroup(group:string,options?:RuntimeComputedOptions){       
        return Promise.all([...this.values()].filter(computedObject=>computedObject.group==group).map(computedObject=> computedObject.async ? computedObject.run(options) : computedObject.run(options)))   
    }
    
    async run(filter:(computedObject:ComputedObject<T>)=>boolean,options?:RuntimeComputedOptions):Promise<any>
    async run(id:string,options?:RuntimeComputedOptions):Promise<any>
    async run():Promise<any>{
      if(arguments.length==0){
        return Promise.all([...this.values()].map(computedObject=>computedObject.run()))
      }      
      let filter,id=''
      if(typeof(arguments[0])==='function'){
        filter = arguments[0] 
      }else if(typeof(arguments[0])==='string'){
        id=arguments[0]
      }            
      const options:RuntimeComputedOptions|undefined = arguments[1]      
      return Promise.all([...this.values()].filter(filter).map(computedObject=>computedObject.run(options)))
    }
    /**
     * 启用或禁用计算
     * @param value 
     */
    async enableGroup(value:boolean){
      for(let computedObject of this.values()){
        computedObject.options.enable = value
      }
    }
    /**
     * 移除指定的计算对象
     * 
     * 注意：如果该计算对象是state的某个属性创建的，只会删除计算对象，不会删除state属性
     * 
     * @param id 
     * @returns 
     */
    delete(id: string){
      //this.get(id)?.mutate.cancel()   // 取消订阅
      return super.delete(id)
    }
    /**
     * 创建一个新计算对象
     */
    get create():ReturnType<typeof computedObjectCreator<T>>{
      if(!this._createComputed){
        this._createComputed = computedObjectCreator<T>(this.store)
      }
      return this._createComputed
    }   
  }
   