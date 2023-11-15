import { createAction, props } from "@ngrx/store"
import { postState } from "./post.state"
import { Posts } from "src/app/models/post.model";

export const ADD_POST="[add post] add"
export const UPDATE_POST="[update post] update"
export const DELETE_POST="[del;ete post] delete"
export const addPost=createAction(ADD_POST,props<{post:Posts}>());
export const updatePost=createAction(UPDATE_POST,props<{post:Posts}>());
export const deletePost=createAction(DELETE_POST,props<{id:any}>());