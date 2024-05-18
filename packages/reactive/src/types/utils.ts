
export type Dict<T=any> = Record<string,T>

export type StateUpdater<State=any> = (state:State)=>any
