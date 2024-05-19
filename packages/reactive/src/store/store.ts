/**

 
 */

import { sharex } from "helux"
import {  createActions } from '../action';
import type { ComputedState, RequiredComputedState } from "../computed/types"
import {  ComputedScopeRef, IStore,   StateGetter,   StateSetter,   StoreDefine, StoreOptions } from '../types';
import { ComputedObjects } from '../computed';
import { deepClone } from "flex-tools/object/deepClone";
import { installExtends } from "../extends" 
import { WatchObjects } from "../watch";
import { log } from "../utils";
import { createUseState } from "./useState"



export function createStore<T extends StoreDefine = StoreDefine>(data:T,options?:Partial<StoreOptions<T>>){
    // 1.初始化配置参数
    const opts = Object.assign({
        id:Math.random().toString(16).substring(2),
        debug:true,
        computedThis:()=>ComputedScopeRef.Root,
        computedScope:()=>ComputedScopeRef.Current,
        singleton:true
    },options) as StoreOptions<T>

    opts.log = (...args:any[])=>{
        if(opts.debug) (log as any)(...args)
    }
    const storeDefine = opts.singleton ? data : deepClone(data)

    // 2. 创建store对象

    // @ts-ignore 
    const store:IStore<T> = { 
        options:opts,
        _replacedKeys:{}                             // 用来保存已经替换过的key
    }

    store.computedObjects = new ComputedObjects<T>(store as IStore<T>),
    store.watchObjects = new WatchObjects<T>(store as IStore<T>)

    // 3. 创建响应式对象
    store.stateCtx = sharex<ComputedState<T['state']>>(storeDefine.state as any, {
        stopArrDep: false,
        moduleName: opts.id,
        onRead: (params) => {
            installExtends<T>(params,store as IStore<T>);
        }
    });

    // 1. 创建Actions
    store.actions = createActions<T>(storeDefine.actions, store, opts);
    // 2. 包装useState
    store.useState = createUseState(store.stateCtx);


    // 3. 创建计算对象的函数
    // const createComputed = computedObjectCreator(stateCtx,extendObjects,opts)
    // // @ts-ignore
    // extendObjects.computedObjects.new = createComputed

    return store

}
