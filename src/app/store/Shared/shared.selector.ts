import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store"
import { SharedState } from "./shared.state"

export const SHARED_STATE_NAME='shared'
export const SHOW_ERROR='[show error] when login fail'
export const getStatus=createFeatureSelector<SharedState>(SHARED_STATE_NAME)
export const getSharedStatus=createSelector(getStatus,state=>{
    return state.showloading?true:false
})
export const getShowError=createFeatureSelector<SharedState>(SHOW_ERROR)
export const getShowErrorMessage=createSelector(getShowError,state=>{
    return state.seterrormessage
})