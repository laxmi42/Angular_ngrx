import { createAction, props } from "@ngrx/store"
import { sharedState } from "./shared.state"
export const SHOW_ERROR='[show error] when login fail'
const shared="[loading spinner] load spinner"
export const setLoadingSpinner=createAction(shared,props<{status:boolean}>())
export const showError=createAction(SHOW_ERROR,props<{message:any}>())