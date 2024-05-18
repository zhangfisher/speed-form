import { ComputedObject} from "./types"
import { computedObjectCreator } from './create';
import type { IStore, StoreDefine } from "../types/store";


   /**
    * 
    */
export class ComputedObjects<T extends StoreDefine =  StoreDefine> extends Map<string,ComputedObject<T>>{
    private _createComputed:ReturnType<typeof computedObjectCreator>
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
    async runGroup(group:string){       
        return Promise.all([...this.values()].filter(v=>v.group==group).map(v=> v.async ? v.mutate.runTask() : v.mutate.run()))   
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
      this.get(id)?.mutate.cancel()   // 取消订阅
      return super.delete(id)
    }
    /**
     * 创建一个新计算对象
     */
    get new():ReturnType<typeof computedObjectCreator>{
      //@ts-ignore 
      
      if(!this._createComputed){
        this._createComputed = computedObjectCreator(this.store)
      }
      return this._createComputed
    }   



  }
  