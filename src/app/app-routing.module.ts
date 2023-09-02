import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleNgrxComponent } from './sample-ngrx/sample-ngrx.component';
import { CounterComponent } from './couter/counter/counter.component';
import { CounterButtonsComponent } from './couter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './couter/counter-output/counter-output.component';
import { CustomInputComponent } from './couter/custom-input/custom-input.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PostListsComponent } from './posts/post-lists/post-lists.component';
import { AddPostComponent } from './posts/add-post/add-post.component';

const routes: Routes = [
  {
    path:'sample-ngrx',
    component:SampleNgrxComponent
  },
  {
    path:'counter',
    component:CounterComponent
  },
  {
    path:'counter-buttons',
    component:CounterButtonsComponent
  },
  {
    path:'counter-output',
    component:CounterOutputComponent
  },
  {
    path:'custom-input',
    component:CustomInputComponent
  },
 
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'post-lists',
    component:PostListsComponent,
    children:[{
path:'add-post',
component:AddPostComponent
    }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  
 }
