// import { ComputedScopeRef, Dict, computed,watch } from "helux-store";
import { computed } from "helux-store";
import { createForm } from "speed-form";
 

const userSchema = {
	fields: {
		firstName: {
			value: "zhang",
			placeholder: "",
			title: "姓", 
			//validate: (value: string) => value.length > 3,
		},
		lastName: {
			value: "fisher",
			placeholder: "",
			title: "名", 
			//validate: (value: string) => value.length > 3,
		},
		fullName: {
			title: "全名",
			value:computed<string>((scope)=>{
				console.log("fullName",scope.firstName,scope.lastName)
				//return scope.firstName,scope.lastName
			})
		},
	},
	actions: {
		
	},
};

type UserFormType = typeof userSchema; 

const User = createForm<UserFormType>(userSchema);


// @ts-ignore
globalThis.User = User;
export default User;
