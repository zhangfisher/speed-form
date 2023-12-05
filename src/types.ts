export type StateUpdater<State=any> = (state:State)=>any
export type Action = (...args:any[])=>StateUpdater
export type AsyncAction = (...args:any[])=>Promise<StateUpdater>
export type Actions  = Record<string,Action | AsyncAction>


// 将状态中的计算属性函数转换为计算属性函数的返回值
export type ComputedState<T extends Record<string, any>> = {
      [K in keyof T]: T[K] extends (...args:any) => any ? ReturnType<T[K]> : T[K] extends Record<string, any> ? ComputedState<T[K]> : T[K];
};


export type ExcludeComputedState<T extends Record<string, any>> = {
      [K in keyof T]: T[K] extends (draft:T) => any ? never : T[K] extends Record<string, any> ? ExcludeComputedState<T[K]> : T[K];
};