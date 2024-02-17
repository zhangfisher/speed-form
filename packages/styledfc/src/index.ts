/**

    为React.Fc组件添加CSS样式

    import {} from "styledfc"

    styled((props,classs)=>{
        return <div className={classs}></div>
    },{
        color:"red",
        backgroundColor:"blue"
        ":hover":{

        }
        "& div":{
        }
    })
 
解析过程如下：

1. 解析样式对象，排除所有以`&`开头的样式，生成样式类名（awquz7er）,并将样式对象中的`&`开头的样式删除
```
.awquz7er{
    color:"red",
    backgroundColor:"blue"
}

.awquz7er:hover{
    color:"blue"
}
.awquz7er div{
    color:"blue"
}
```


- 以`&`开头，`&`代表的是当前组件的样式




useInsertionEffect
 * 
 */

import type { CSSProperties } from "react"
import { CSSObject } from "./types"
import { createStyles } from "./parse"


export interface StyledOptions{
    className?:string | (()=>string)         // 生成的样式类名，如果没有指定则自动生成
    wrapper?:string | (()=>string)           // 包裹组件的样式类名，如果没有指定则自动生成
}


/**
 * 生成一个样式类名
 * @param styles 
 */
function generateClassName(styles:CSSProperties){

} 

export type WithStyledComponent<Props> = (props:React.PropsWithChildren<Props>,className:string)=>React.ReactElement

export function styled<Props>(fc:WithStyledComponent<Props>,styles:CSSObject,options?:StyledOptions){
    const style = createStyles(styles,options?.className)
    
    return f
}

// styled(()=>{
//     return <div></div>
// },{
//     color:"red",
//         backgroundColor:"blue",
//         ":hover":{

//         },
//         "& div":{
//         }
//     }
// )