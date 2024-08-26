import {  ComputedScopeRef, IStore, Dict, StoreOptions } from '../types';
import { ComputedObjects } from '../computed';
import { installExtends } from "../extends" 
import { WatchObjects, createWatch } from "../watch"; 
import { forEachObject, log } from "../utils";
import { createUseState } from "./useState"
import { createSetState } from "./setState";
import { createUseWatch } from '../watch/useWatch';
import { getRndId } from "../utils/getRndId";
import { HeluxReactiveable } from "../reactives/helux";
import { Reactiveable } from "../reactives/types";
import { computedObjectCreator } from '../computed/create';
import { setEventEmitter } from '../events';



export function createStore<State extends Dict>(data:State,options?:Partial<StoreOptions<State>>){
    // 1.初始化配置参数
    const opts = Object.assign({
        id            : getRndId(),
        debug         : true,
        immediate  : false,
        enableComputed: true,
        scope         : ()=>ComputedScopeRef.Current,
    },options) as StoreOptions<State>

    opts.log = (...args:any[])=>{
        if(opts.debug) (log as any)(...args)
    } 
    // 2. 创建store对象

    // @ts-ignore 
    const store:IStore<State> = { 
        options: opts, 
        _replacedKeys:{}                             // 用来保存已经替换过的key
    }

    setEventEmitter(store)

    store.computedObjects = new ComputedObjects<State>(store as IStore<State>),
    store.watchObjects = new WatchObjects<State>(store as IStore<State>)

    // 3. 创建响应式对象， 此处使用helux
    store.reactiveable = new HeluxReactiveable<State>(data,{
        id:opts.id,
        onRead: (params) => {
            installExtends<State>(params,store as IStore<State>);
        }
    }) as Reactiveable<State>

    store.state = store.reactiveable.state    
    store.emit("created")
    store.useState = createUseState<State>(store)
    store.setState = createSetState<State>(store)
    store.enableComputed = (value:boolean=true)=>store.options.enableComputed = value
    store.sync = store.reactiveable.sync.bind(store.reactiveable)
    // store.sync = store.stateCtx.sync
    // 侦听
    store.watch = createWatch<State>(store)
    store.useWatch = createUseWatch<State>(store)
    store.watch = createWatch<State>(store)

    // 创建计算对象的函数
    // store.computed = createComputed<>(store)
    // store.useComputed = createComputed<>(store)

    // 3. 创建计算对象的函数
    store.createComputed = computedObjectCreator<State>(store) 

    if(opts.immediate){
        forEachObject(store.state)
    }
    return store

}
