/**

 
 */

import { ISharedCtx, model,flush, sharex } from "helux"
import type { ActionDefines, Actions } from './types/action';
import {  createActions } from './action';
import { ComputedScopeRef, ComputedState, Dict, IStore, RequiredComputedState, StateComputedType, StoreDefine, StoreOptions } from './types';
import { type ComputedObject, ComputedObjects, ComputedOptions } from './computed';
import { deepClone } from "flex-tools/object/deepClone";
import { installExtends } from "./extends" 
import { WatchObjects, createUseWatch, createWatch } from "./watch";
import { log, useStateWrapper } from "./utils";


export function createStore<T extends StoreDefine = StoreDefine>(data:T,options?:StoreOptions<T>){
    // 1.初始化配置参数
    const opts = Object.assign({
        id:Math.random().toString(16).substring(2),
        debug:true,
        computedThis:()=>ComputedScopeRef.Root,
        computedScope:()=>ComputedScopeRef.Current,
        singleton:true
    },options) as Required<StoreOptions<T>>
    opts.log = (...args:any[])=>{
        if(opts.debug) (log as any)(...args)
    }
    const storeDefine = opts.singleton ? data : deepClone(data)

    // 2. 创建store对象
    const store:Partial<IStore<T>> = { 
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
            installExtends<T>(params,store as IStore<T>, opts);
        }
    });

    // 1. 创建Actions
    const actions = createActions<T>(storeDefine.actions, store, opts);
    // 2. 处理useState
    const useState = useStateWrapper<T['state']>(store.stateCtx );


    // 3. 创建计算对象的函数
    // const createComputed = computedObjectCreator(stateCtx,extendObjects,opts)
    // // @ts-ignore
    // extendObjects.computedObjects.new = createComputed

    return {
        actions,
        state: stateCtx.reactive,
        useState,
        watch: createWatch(stateCtx,opts),
        useWatch: createUseWatch(stateCtx,opts)
    };

}
