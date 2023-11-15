import { createReducer, on } from "@ngrx/store"
import { sharedState } from "./shared.state"

import { setLoadingSpinner, showError } from "./shared.action"

const _SharedReducer=createReducer(sharedState,on(setLoadingSpinner,(state,action)=>{
    return {
        ...state,
        showloading:action.status
    }
    
}),
on(showError,(state,action)=>{
    return{
        ...state,
        seterrormessage:action.message
    }
})

)


export function SharedReducer(state:any,action:any){
    return _SharedReducer(state,action)
}