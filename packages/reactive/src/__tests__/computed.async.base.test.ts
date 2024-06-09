import { test, expect, describe, beforeAll } from "vitest"
import { createStore, ComputedScopeRef, computed, IStore, Dict } from ".."
import { delay } from "flex-tools/async/delay"

describe("异步计算", () => {

    test("异步计算原地替换创建AsyncComputed数据结构", async () => {
        return new Promise<void>((resolve) => {
            const store = createStore({
                price: 2,
                count: 3,
                total: async (scope: any) => {
                    await delay(10)
                    return scope.price * scope.count
                }
            })
            store.state.total
            expect(store.state.total.loading).toBe(true) // 由于计算属性会马上执行一次，所以loading=true
            expect(store.state.total.cancel).toBeDefined()
            expect(store.state.total.error).toBeDefined()
            expect(store.state.total.loading).toBeDefined()
            expect(store.state.total.progress).toBeDefined()
            expect(store.state.total.result).toBeUndefined()
            expect(store.state.total.retry).toBeDefined()
            expect(store.state.total.run).toBeDefined()
            expect(store.state.total.timeout).toBeDefined()
            resolve()
        })
    })

    test("异步计算初始化时不执行,提供初始始值", async () => {
        return new Promise<void>(async (resolve) => {
            const store = createStore({
                price: 2,
                count: 3,
                total: computed(async (scope: any) => {
                    return scope.price * scope.count
                }, ['price', 'count'], {
                    immediate: false, // 不马上执行，需要等等依赖变化多端时再执行
                    initial: 100
                })
            })
            expect(store.state.total.loading).toBe(false)
            expect(store.state.total.result).toBe(100)
            await delay(10)
            resolve()
        })
    })
    test("当异步计算属性依赖变化时自动重新计算", async () => {
        return new Promise<void>((resolve) => {
            const results: number[] = []
            const store = createStore({
                price: 2,
                count: 3,
                total: computed<number>(async (scope: any) => {
                    return scope.price * scope.count
                }, ['price', 'count'])
            })
            store.state.total  // 由于读取时才会创建计算属性，所以需要读取一次，如果缺少这一步，计算属性不会创建
            store.setState(draft => draft.count++)
            store.setState(draft => draft.price++)
            // 当计算函数执行完成后的回调
            store.on("computed", () => {
                results.push(store.state.total.result)
                // 为什么会有三个结果？
                // 第一次创建计算属性时，会执行一次，当更新count和price时，由于依赖会再次执行2次。   
                if (results.length === 3) {
                    expect(results).toEqual([12, 12, 12])
                    resolve()
                }
            })
        })
    })


})

describe("异步依赖管理:通过多种方式指定异步依赖参数", () => {
    test("使用绝对字符串路径指定依赖", async () => {
        return new Promise<void>((resolve) => {
            const paths: string[] = []
            const store = createStore({
                root: {
                    parent: {
                        current: {
                            price: 2,
                            count: 3,
                            total1: computed<number>(async (scope: any) => {
                                return scope.price * scope.count
                            }, ['root.parent.current.price'],        // 使用字符串路径数组指定依赖
                                { immediate: false }                      // 不马上执行，需要等等依赖变化多端时再执行
                            ),
                            // total2:computed<number>(async (scope:any)=>{
                            //     return scope.price * scope.count 
                            // },[['root','parent','current','price']]),   // 使用字符串数组指定依赖
                            // total3:computed<number>(async (scope:any)=>{
                            //     return scope.price * scope.count 
                            // },["./price"]),   // total3所在对象的相对路径
                            // total4:computed<number>(async (scope:any)=>{
                            //     return scope.price * scope.count 
                            // },["../current.price"]),   // ..代表父对象parent
                            // total5:computed<number>(async (scope:any)=>{
                            //     return scope.price * scope.count 
                            // },["/root.parent.current.price"])    
                        }
                    }
                },
            })
            //以上total1-total5虽然depens参数方式不同，但是都是指向同一个price
            // 计算属性的scope默认指向current
            store.state.root.parent.current.total1
            // store.state.root.parent.current.total2
            // store.state.root.parent.current.total3
            // store.state.root.parent.current.total4
            // store.state.root.parent.current.total5
            // 以上读取操作会创建计算属性，并导致计算属性执行一次
            store.on("computed", ({ path }) => {
                paths.push(path.join("."))
                if (paths.length === 5) {
                    expect(paths).toEqual([
                        "root.parent.current.total1",
                        // "root.parent.current.total2",
                        // "root.parent.current.total3",
                        // "root.parent.current.total4",
                        // "root.parent.current.total5"
                    ])
                    expect(store.state.root.parent.current.total1.result).toBe(9)
                    // expect(store.state.root.parent.current.total2.result).toBe(9)
                    // expect(store.state.root.parent.current.total3.result).toBe(9)
                    // expect(store.state.root.parent.current.total4.result).toBe(9)
                    // expect(store.state.root.parent.current.total5.result).toBe(9)
                    resolve()
                }
            })
            // 更新price会导致total1-total5重新计算
            store.setState(draft => draft.root.parent.current.price++)




        })
    })
    test("使用字符串数组路径指定依赖", async () => {
        return new Promise<void>((resolve) => {
            const paths: string[] = []
            const store = createStore({
                root: {
                    parent: {
                        current: {
                            price: 2,
                            count: 3,
                            total: computed<number>(async (scope: any) => {
                                return scope.price * scope.count
                            }, [['root', 'parent', 'current', 'price']],
                                { immediate: false }              // 不马上执行，需要等等依赖变化多端时再执行
                            ),   // 使用字符串数组指定依赖 
                        }
                    }
                },
            })
            // 计算属性的scope默认指向current
            store.state.root.parent.current.total
            // 以上读取操作会创建计算属性，并导致计算属性执行一次
            store.on("computed", ({ path }) => {
                paths.push(path.join("."))
                if (paths.length === 5) {
                    expect(paths).toEqual([
                        "root.parent.current.total1",
                    ])
                    expect(store.state.root.parent.current.total.result).toBe(9)
                    resolve()
                }
            })
            // 更新price会导致total1-total5重新计算
            store.setState(draft => draft.root.parent.current.price++)




        })
    })
    test("使用相对当前对象的字符串路径指定依赖", async () => {
        return new Promise<void>((resolve) => {
            const paths: string[] = []
            const store = createStore({
                root: {
                    parent: {
                        current: {
                            price: 2,
                            count: 3,
                            total1: computed<number>(async (scope: any) => {
                                return scope.price * scope.count
                            }, ["./price"],        // 使用字符串路径数组指定依赖
                                { immediate: false }                      // 不马上执行，需要等等依赖变化多端时再执行
                            )
                        }
                    }
                },
            })
            //以上total1-total5虽然depens参数方式不同，但是都是指向同一个price
            // 计算属性的scope默认指向current
            store.state.root.parent.current.total1
            // store.state.root.parent.current.total2
            // store.state.root.parent.current.total3
            // store.state.root.parent.current.total4
            // store.state.root.parent.current.total5
            // 以上读取操作会创建计算属性，并导致计算属性执行一次
            store.on("computed", ({ path }) => {
                paths.push(path.join("."))
                if (paths.length === 5) {
                    expect(paths).toEqual([
                        "root.parent.current.total1",
                        // "root.parent.current.total2",
                        // "root.parent.current.total3",
                        // "root.parent.current.total4",
                        // "root.parent.current.total5"
                    ])
                    expect(store.state.root.parent.current.total1.result).toBe(9)
                    // expect(store.state.root.parent.current.total2.result).toBe(9)
                    // expect(store.state.root.parent.current.total3.result).toBe(9)
                    // expect(store.state.root.parent.current.total4.result).toBe(9)
                    // expect(store.state.root.parent.current.total5.result).toBe(9)
                    resolve()
                }
            })
            // 更新price会导致total1-total5重新计算
            store.setState(draft => draft.root.parent.current.price++)




        })

    })
    test("使用../相对路径方式指定依赖", async () => {
        return new Promise<void>((resolve) => {
            const paths: string[] = []
            const store = createStore({
                root: {
                    parent: {
                        current: {
                            price: 2,
                            count: 3,
                            total1: computed<number>(async (scope: any) => {
                                return scope.price * scope.count
                            }, ['../current.price'],        // 使用字符串路径数组指定依赖
                                { immediate: false }                      // 不马上执行，需要等等依赖变化多端时再执行
                            ),
                            // total2:computed<number>(async (scope:any)=>{
                            //     return scope.price * scope.count 
                            // },[['root','parent','current','price']]),   // 使用字符串数组指定依赖
                            // total3:computed<number>(async (scope:any)=>{
                            //     return scope.price * scope.count 
                            // },["./price"]),   // total3所在对象的相对路径
                            // total4:computed<number>(async (scope:any)=>{
                            //     return scope.price * scope.count 
                            // },["../current.price"]),   // ..代表父对象parent
                            // total5:computed<number>(async (scope:any)=>{
                            //     return scope.price * scope.count 
                            // },["/root.parent.current.price"])    
                        }
                    }
                },
            })
            //以上total1-total5虽然depens参数方式不同，但是都是指向同一个price
            // 计算属性的scope默认指向current
            store.state.root.parent.current.total1
            // store.state.root.parent.current.total2
            // store.state.root.parent.current.total3
            // store.state.root.parent.current.total4
            // store.state.root.parent.current.total5
            // 以上读取操作会创建计算属性，并导致计算属性执行一次
            store.on("computed", ({ path }) => {
                paths.push(path.join("."))
                if (paths.length === 5) {
                    expect(paths).toEqual([
                        "root.parent.current.total1",
                        // "root.parent.current.total2",
                        // "root.parent.current.total3",
                        // "root.parent.current.total4",
                        // "root.parent.current.total5"
                    ])
                    expect(store.state.root.parent.current.total1.result).toBe(9)
                    // expect(store.state.root.parent.current.total2.result).toBe(9)
                    // expect(store.state.root.parent.current.total3.result).toBe(9)
                    // expect(store.state.root.parent.current.total4.result).toBe(9)
                    // expect(store.state.root.parent.current.total5.result).toBe(9)
                    resolve()
                }
            })
            // 更新price会导致total1-total5重新计算
            store.setState(draft => draft.root.parent.current.price++)




        })
    })

    test("使用/绝对路径方式指定依赖", async () => {
        return new Promise<void>((resolve) => {
            const paths: string[] = []
            const store = createStore({
                root: {
                    parent: {
                        current: {
                            price: 2,
                            count: 3,
                            total: computed<number>(async (scope: any) => {
                                return scope.price * scope.count
                            }, ["/root.parent.current.price"],        // 使用字符串路径数组指定依赖
                                { immediate: false }                      // 不马上执行，需要等等依赖变化多端时再执行
                            ) 
                        }
                    }
                },
            })
            //以上total1-total5虽然depens参数方式不同，但是都是指向同一个price
            // 计算属性的scope默认指向current
            store.state.root.parent.current.total 
            // 以上读取操作会创建计算属性，并导致计算属性执行一次
            store.on("computed", ({ path }) => {
                paths.push(path.join("."))
                if (paths.length === 5) {
                    expect(paths).toEqual([
                        "root.parent.current.total1",
                        // "root.parent.current.total2",
                        // "root.parent.current.total3",
                        // "root.parent.current.total4",
                        // "root.parent.current.total5"
                    ])
                    expect(store.state.root.parent.current.total1.result).toBe(9)
                    // expect(store.state.root.parent.current.total2.result).toBe(9)
                    // expect(store.state.root.parent.current.total3.result).toBe(9)
                    // expect(store.state.root.parent.current.total4.result).toBe(9)
                    // expect(store.state.root.parent.current.total5.result).toBe(9)
                    resolve()
                }
            })
            // 更新price会导致total1-total5重新计算
            store.setState(draft => draft.root.parent.current.price++)




        })
    })
})