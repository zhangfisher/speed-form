// import { ComputedScopeRef, Dict, computed,watch } from "@speedform/reactive";
import { computed } from "@speedform/reactive";
import { createForm } from "@speedform/core";
 

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
		fullName:(scope:any)=>{
			return scope.firstName.value+scope.lastName.value
		}
	},
	actions: {
		
	},
};

type UserFormType = typeof userSchema; 

const User = createForm<UserFormType>(userSchema);


// @ts-ignore
globalThis.User = User;
export default User;
