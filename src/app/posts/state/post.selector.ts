import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Posts } from "src/app/models/post.model";
import { postState } from "./post.state";

const getPostsState= createFeatureSelector<postState>('posts');
console.log(getPostsState);

export const getPosts= createSelector(getPostsState, state=>{
    console.log(state.posts);
    
    return state.posts
})
