
export const SKIP_COMPUTED= Symbol('SKIP_COMPUTED')

/**
 * 
 * 用来在状态中标识一个函数，该函数不会被转换为计算属性函数
 * 
 */
export function skipComputed(fn:Function){
    // @ts-ignore
    fn[SKIP_COMPUTED] = true
    return fn
}

