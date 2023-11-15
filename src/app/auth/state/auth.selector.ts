import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AuthState } from "./auth.state"

export const AUTH_STATE_NAME='authselector'

 const getLogin=createFeatureSelector<AuthState>(AUTH_STATE_NAME)
 export const getLoginSelector=createSelector(getLogin,state=>{
    
return state.user
 })