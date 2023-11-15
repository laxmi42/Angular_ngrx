import { Action, createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.state"
import { loginSucess } from "./auth.action"

export const  _authReducer=createReducer(initialState,
    on(loginSucess,(state,action)=>{
      console.log(state);
      console.log(action.user);
      
      
  return{
    ...state,
    user:action.user
  }
  
    })
    ) 
    




export function AuthReducer(state: any,action: Action){
    return _authReducer(state,action)
}