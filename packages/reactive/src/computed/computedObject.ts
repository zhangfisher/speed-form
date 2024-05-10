import { ComputedObject} from "./types"
import { Dict } from "../types"


   /**
    * 
    */
export class ComputedObjects<T=Dict> extends Map<string,ComputedObject<T>>{
  
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
  }
  