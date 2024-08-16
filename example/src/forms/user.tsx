// import { ComputedScopeRef, Dict, computed,watch } from "@speedform/reactive";
import { computed, createForm, createStore } from "@speedform/core";
 

const userSchema = {
	fields: {
		firstName: {
			value: "zhang",
			placeholder: "",
			title: "姓", 
			validate: (value: string) => value.length > 3,
		},
		lastName: {
			value: "fisher",
			placeholder: "",
			title: "名", 
			validate: (value: string) => value.length > 3,
		},
		fullName:computed<string>((scope:any)=>{
			return scope.firstName.value+scope.lastName.value
		})
	},
	actions: {
		
	},
};

 
const User = createForm(userSchema);

User.fields.fullName



// @ts-ignore
globalThis.User = User;
export default User;
const s = createStore({
    fields:{
        fullName:computed<string>(()=>"111")
    }
})

s.state.fields.fullName

const s2 = createForm({
    fields:{
		firstName: {
			value: "zhang",
			placeholder: "",
			title: "姓", 
			validate: (value: string) => value.length > 3,
		},
		lastName: {
			value: "fisher",
			placeholder: "",
			title: "名", 
			validate: (value: string) => value.length > 3,
		},
        fullName:computed<string>((scope)=>{
			return scope.firstName.value+scope.lastName.value
		})
    }
})
s2.state.fields.fullName