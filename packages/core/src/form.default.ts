import { dirty } from "./dirty"
import { validate } from "./validate"

 
export default {
    title    : "SpeedForm",
    help     : "",
    tips     : "",
    status   : "idle",    
    dirty    : dirty(['fields']),               // 跟踪字段值,当值发生变化时，将dirty设置为true
    validate : validate({
        entry: ['fields']
    }),
    readonly : false,
    enable   : true,
    visible  : true,
    actions  : {}
}
    