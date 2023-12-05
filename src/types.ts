export type StateUpdater<State=any> = (state:State)=>any
export type Action = (...args:any[])=>StateUpdater
export type AsyncAction = (...args:any[])=>Promise<StateUpdater>
export type Actions  = Record<string,Action | AsyncAction>
