import type { CSSProperties } from "react";

// 定义合法的 CSS 选择器类型  
export type CSSSelector = `:${string}` | `&${string}` | `>${string}` | `:${string}` | `~${string}` | `[${string}]`;  

export interface CSSObject extends CSSProperties {
    [selector: CSSSelector]: CSSObject 
}