import { dirty } from "./dirty"
import { validate } from "./validate"

 
export default {
    title:"SpeedForm",
    help:"",
    tips:"",
    status:"idle",
    // 跟踪字段值,当值发生变化时，将dirty设置为true
    dirty:dirty(),
    validate:validate(),
    readonly:false,
    enable:true,
    visible:true
}
    