import { createReducer, on } from "@ngrx/store"
import { initialState } from "./post.state"
import { state } from "@angular/animations"
import { addPost, deletePost, updatePost } from "./post.actions"


const _postReducer=createReducer(initialState,
  on(addPost,(state,action)=>{

  console.log(action.post);
  let post={
    ...action.post
  }
  post.id=state.posts.length+1
    return {
     ...state,
    posts: [...state.posts,post]

    }

}),
on(updatePost,(state,action)=>{
  
  const updatePost=state.posts.map((data:any)=>{
  return (data.id===action.post.id)?action.post:data
  })
  return {
    ...state,
posts:updatePost
  }

}),
on(deletePost,(state,{id})=>{
  console.log(id);
  
  // const deletepost=state.posts.filter((post,i)=>{
  //   console.log(i);
    
  //   return(
  //   post.id===action.id)?state.posts.splice(i,1):post})
  const deletepost=state.posts.filter((post,i)=> post.id!==id)
  return {
    ...state,
    posts:deletepost
  }
})
)
   







export function postReducer(state:any,action:any){
    return _postReducer(state,action)
}