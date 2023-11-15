import { createAction, props } from "@ngrx/store"
import { User } from "src/app/models/User.model"


export const LOGIN_START='[auth login] login start'
export const LOGIN_SUCESS='[auth login] login scucess'
export const LOGIN_FAIL='[auth login] login fail'



export const loginStart=createAction(LOGIN_START,props<{email:any;password:any}>())

export const loginSucess=createAction(LOGIN_SUCESS,props<{user:User}>())


export const loginFail=createAction(LOGIN_FAIL)