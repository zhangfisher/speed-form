
import { test,expect, describe, beforeAll } from "vitest"
import { createStore,ComputedScopeRef,computed, IStore } from "../"


const Account = {
    state:{
        user:{
            firstName:"zhang",
            lastName:"fisher",
            fullName: computed(async ([first,last])=>{ 
                return first + last
            },[
                "./firstName",
                "./lastName"
            ],{
                async:true,
                // 默认scope指向的是current，即fullName所在的对象
                // 此处让其指定所依赖的值
                scope:ComputedScopeRef.Depends
            })
        }
    }
}
  


describe("依赖参数",()=>{
    let store:IStore<typeof Account.state>
    beforeAll(()=>{
        store = createStore<typeof Account>(Account)
    })

    test("指定依赖作为scope",()=>{
        return new Promise<void>(resolve=>{
            expect(store.state.user.firstName).toBe("zhang")
            expect(store.state.user.lastName).toBe("fisher")
            store.state.user.fullName
            
            // 由于是异步计算所以
            setTimeout(()=>{
              expect(store.state.user.fullName.result).toBe("zhangfisher")
              resolve()
          },100)
        })
      
      

    })

})