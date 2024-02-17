/**

    为React.Fc组件添加CSS样式

    import {} from "styledfc"

    styled((props,className)=>{
        return <div className={className}></div>
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
 
useInsertionEffect
 * 
 */

import { CSSObject } from "./types"
import { createStyles } from "./parse"
import { insertStylesheet } from "./utils"


export interface StyledOptions{
    styleId?:string                          // 样式表的ID
    className?:string                        // 生成的样式类名，如果没有指定则自动生成
}


/**
 * 生成一个样式表id
 * 
 * @param styles 
 */
function generateStyleId():string{
    return Math.random().toString(36).substring(2, 10)   
} 

export type WithStyledComponent<Props> = (props:React.PropsWithChildren<Props>,className:string)=>React.ReactElement

export function styled<Props>(FC:WithStyledComponent<Props>,styles:CSSObject,options?:StyledOptions){
    const opts = Object.assign({
        className:'c'+Math.random().toString(36).substring(2, 10) , 
        styleId:generateStyleId()
    },options) as Required<StyledOptions>

    // 1. 创建样式字符串
    const [className,cssString] = createStyles(styles,{className:opts.className})
    // 2. 将样式字符串插入到页面中
    insertStylesheet(cssString,opts.styleId)
    // 3. 返回组件
    return (props:React.PropsWithChildren<Props>)=>{
        return FC(props,className)
    }
}

