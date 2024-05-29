export * from "./store/store" 
export * from "./computed"
export * from "./types"
// export * from "./action"     废弃
export * from "./watch"
export * from "./consts" 
export * from "./reactive"
export { 
    markRaw,
    getSnap,
    $,
    share as createObject
} from "helux"
export { 
    getValueByPath,
    isIncludePath,
    isSkipComputed,
    skipComputed,
    getVal,
    setVal
} from "./utils"
 