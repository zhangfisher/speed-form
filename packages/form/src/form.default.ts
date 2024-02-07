import { dirty } from "./dirty"
import { validate } from "./validate"

 
export default {
    title:"SpeedForm",
    help:"",
    tips:"",
    status:"idle",
    // 跟踪字段值,当值发生变化时，将dirty设置为true
    dirty:dirty(['fields']),
    validate:validate({
        entry:['fields'],
        get(value, opts) {
            return Object.values(value).reduce((prev, cur) => {
                if(typeof(cur)=='boolean'){
                    return cur===false ? false : prev
                }else{
                    return prev 
                }
            },true)
        },
    }),
    readonly:false,
    enable:true,
    visible:true
}
    