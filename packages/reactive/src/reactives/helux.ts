import { ISharedCtx, sharex } from "helux"
import { CreateComputedOptions, Reactiveable, IReactiveableOptions } from "./types";
import { ComputedState, Dict, RequiredComputedState, RuntimeComputedOptions, StateGetter, StateSetter } from "../types";
import { getRndId } from "../utils/getRndId";


export class HeluxReactiveable<T extends Dict =Dict> extends Reactiveable<T>{
    private _stateCtx:ISharedCtx<T>
    constructor(state:T,options:IReactiveableOptions){ 
        super(state,options)
        this._stateCtx = sharex<T>(state as any,{
            stopArrDep: false,
            moduleName:options.id ?? getRndId(),
            onRead:(params)=>{
                options.onRead(params as any)
           }
        }) 
    }
    get state(){
        return this._stateCtx.state as ComputedState<T>
    }
    /**
     * const [ state ] = useState()
     * const [ firstName ] = useState<string>((state)=>state.firstName)
     * const [ fullName ] = useState<string>((state)=>state.firstName+state.lastName)
     * const [ fullName,updateFullName ] = useState<string,string[]>(
     *      (state)=>state.firstName+state.lastName,
     *      (state,value)=>{
     *          state.firstName = value[0]
     *         state.lastName = value[1]
     *      }
     * )
     * updateFullName(['zhang','fisher])
     * 
     * @param getter 
     * @param setter 
     * @returns 
     */
    useState<Value=ComputedState<T>,SetValue=Value>(
        getter?:StateGetter<RequiredComputedState<T>,Value>,
        setter?:StateSetter<RequiredComputedState<T>,SetValue>
    ):[Value,(value:SetValue)=>void]{ 
        const [ state,setState ] = this._stateCtx.useState()
        const value = (typeof(getter)==='function' ? getter(state as RequiredComputedState<T>) : state)  as Value 
        const updateValue = (typeof(setter)=='function' ?
            (value:SetValue)=>{ 
                //@ts-ignore
                setState((draft:any)=>{ 
                    setter.call(draft,draft as any,value)
                }) 
            } : setState ) as (value:SetValue)=>void
 
        return [ value, updateValue ]
    }

    setState(fn:(draft:T)=>void):void{
        //@ts-ignore
       this._stateCtx.setState(fn)
    }
    /**
     * 创建计算属性
     * @param fn 
     * @param depents 
     * @param options 
     */
    createComputed(params: CreateComputedOptions<ComputedState<T>>): string { 
        const {initial,onComputed,depends,options} = params
        this._stateCtx.mutate({            
            // 收集依赖
            deps: (state: any) =>{
              return depends(state)
            },
            // 初始化计算属性
            fn: (draft, params) => {
              if (params.isFirstCall) {   
                initial(draft, params)  
              }
            },
            //  此函数在依赖变化时执行，用来异步计算
            // extraArgs是在调用run方法时传入的额外计算参数，可用来覆盖计算参数
            task: async ({ draft, setState, input, extraArgs }) => {
                // @ts-ignore
                return onComputed({draft,setState,input,options:Object.assign({},extraArgs)})              
            },
            immediate     : options.immediate,
            desc          : options.id,
            checkDeadCycle: false,
        });
        return options.id as string
    }
    runComputed(id:string,options?:RuntimeComputedOptions):void{
        const params = {desc:id,extraArgs:options}
        this._stateCtx.runMutateTask(params) 
    }    
}