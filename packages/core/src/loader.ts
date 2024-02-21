/**
 * 
 * 
 * createForm需要一个schema
 *  
 * loadForm允许你加载一个自定义的JSON schema
 * 
 * 
 * 
 * 
 *  
 * - 将输入JSON数据映射到表单结构中，映射规则如下：
 *  
 *  1. 简单计算函数映射：如data={name:"()=>1"},表单结构为{name:()=>1}
 *  2. 计算函数映射：如data={name:"computed(()=>1)"},表单结构为{name:computed(()=>1)}
 * 
* - 由于可能存在数据结构与表单结构不匹配的情况，所以需要提供一个onNotMatch回调来处理

*  
 * 
 * 
 */

import { Dict } from "@speedform/reactive";


export interface LoadFormOptions{
    isComputed:(keyPath:string[],value:string)=>string | Function
}


export function loadForm(schema:Dict){
    
}