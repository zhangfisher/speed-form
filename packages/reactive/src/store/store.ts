import {  ComputedScopeRef, IStore, StoreDefine, StoreEvents, StoreOptions } from '../types';
import { ComputedObjects } from '../computed';
import { installExtends } from "../extends" 
import { WatchObjects, createWatch } from "../watch"; 
import { log } from "../utils";
import { createUseState } from "./useState"
import { createSetState } from "./setState";
import mitt,{Emitter} from "mitt";
import { createUseWatch } from '../watch/useWatch';
import { getRndId } from "../utils/getRndId";
import { HeluxReactiveable } from "../reactives/helux";
import { Reactiveable } from "../reactives/types";



export function createStore<T extends StoreDefine = StoreDefine>(data:T,options?:Partial<StoreOptions<T>>){
    // 1.初始化配置参数
    const opts = Object.assign({
        id           : getRndId(),
        debug        : true,
        scope: ()=>ComputedScopeRef.Current,
        singleton    : true,
        
    },options) as StoreOptions<T>

    opts.log = (...args:any[])=>{
        if(opts.debug) (log as any)(...args)
    } 

    const storeEmitter:Emitter<StoreEvents> = mitt()
    

    // 2. 创建store对象

    // @ts-ignore 
    const store:IStore<T> = { 
        options: opts,
        on     : storeEmitter.on,
        off    : storeEmitter.off,
        emit   : storeEmitter.emit,
        _replacedKeys:{}                             // 用来保存已经替换过的key
    }

    store.computedObjects = new ComputedObjects<T>(store as IStore<T>),
    store.watchObjects = new WatchObjects<T>(store as IStore<T>)

    // 3. 创建响应式对象， 此处使用helux
    store.reactiveable = new HeluxReactiveable<T>(data,{
        id:opts.id,
        onRead: (params) => {
            installExtends<T>(params,store as IStore<T>);
        }
    }) as Reactiveable<T>

    store.state = store.reactiveable.state    
    store.emit("created")
    store.useState = createUseState<T>(store)
    store.setState = createSetState<T>(store)
    // store.enableComputed = (value:boolean=true)=>store.reactiveable.setEnableMutate(value)
    // store.sync = store.stateCtx.sync
    // 侦听
    store.watch = createWatch<T>(store)
    store.useWatch = createUseWatch<T>(store)
    store.watch = createWatch<T>(store)

    // 创建计算对象的函数
    // store.computed = createComputed<>(store)
    // store.useComputed = createComputed<>(store)

    // 3. 创建计算对象的函数
    // const createComputed = computedObjectCreator(stateCtx,extendObjects,opts)
    // // @ts-ignore
    // extendObjects.computedObjects.new = createComputed

    return store

}
