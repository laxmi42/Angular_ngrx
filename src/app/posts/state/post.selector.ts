import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Posts } from "src/app/models/post.model";
import { postState } from "./post.state";
export const POST_STATE_NAME='posts'
const getPostsState= createFeatureSelector<postState>(POST_STATE_NAME);
console.log(getPostsState);

export const getPosts= createSelector(getPostsState, state=>{
    console.log(state.posts);
    
    return state.posts
})

export const getPostById= createSelector(getPostsState,(state:any,props:any)=>{
    return state.posts.find((post:any)=>
        
        
        post.id===parseInt(props.id)
    )
    
})
