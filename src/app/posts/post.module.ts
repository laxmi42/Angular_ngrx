import { NgModule } from "@angular/core";
import { PostListsComponent } from "./post-lists/post-lists.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditpostsComponent } from "./editposts/editposts.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "../couter/state/counter.reducer";
import { postReducer } from "./state/post.reducer";
import { POST_STATE_NAME } from "./state/post.selector";


const routes:Routes=[
    {
        path:'',
        component:PostListsComponent,
        children:[{
    path:'add-post',
    component:AddPostComponent
        },
        {
        path:'edit-post/:id',
        component:EditpostsComponent
        }
        ]
      },
]
@NgModule({
    declarations:[PostListsComponent,AddPostComponent,EditpostsComponent,],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes),StoreModule.forFeature(POST_STATE_NAME,postReducer),]
})
    export class PostModule{

    }