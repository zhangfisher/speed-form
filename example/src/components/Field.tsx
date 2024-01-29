import { AsyncComputedObject } from "helux-store"
import { ReactFC } from "../types"
import ColorBlock from "./ColorBlock"
import { Loading } from "./Loading"

export const ValidResult:React.FC<FieldProps> = ({validate,help})=>{
    // 如果是同步校验，则validate是一个boolean
    const isAsycValidate = typeof(validate)!=='boolean'
    //
    const isValid = isAsycValidate ? validate?.value :  validate 
    
    const isValiding = isAsycValidate ? validate?.loading: false
    
    // 无效时的提示
    const invalidTips:string= isAsycValidate ? validate?.error : help
    return <span style={{
        color:'red',
        display: isValiding || !isValid ? 'flex'  : 'none' 
    }}>         
    <Loading visible={isValiding} tips="正在验证..."/>
    { !isValiding && (isValid ?  '' : invalidTips ) }
</span>
}


export interface FieldProps{
    label?:string
    visible?:boolean
    enable?:boolean
    help?:string
    validate?: boolean | AsyncComputedObject<boolean>    
}  

export const Field:ReactFC<FieldProps> = (props)=>{
    const {enable,visible,label,children} = props
    return  (
        <div  className="field"  style={{
            position:'relative',
            display: visible===false ? 'none' : 'flex',
            boxSizing:"border-box",
            flexDirection:"row",
            width:'100%',
            padding:"8px"
        }}>   
            <label  className="field-label"  style={{
                minWidth:'160px',
                fontWeight:'bold',
                color: enable===false ? 'gray' : 'inherit'
            }}>{label}:</label>
            <span className="field-value" style={{
                flexGrow:1,
                display:'flex',
                flexDirection:'row',
                color: enable===false ? 'gray' : 'inherit'
            }}>{children}</span>  
            <ValidResult {...props}/>
            <ColorBlock style={{
                position:'absolute',
                right:0,
                fontSize:'10px',
                borderRadius: '4px',
            }}  title="渲染计数"/>     
        </div>   
    )
}
