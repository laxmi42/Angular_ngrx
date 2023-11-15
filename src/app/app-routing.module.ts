import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleNgrxComponent } from './sample-ngrx/sample-ngrx.component';


import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path:'sample-ngrx',
    component:SampleNgrxComponent
  },
  {
    path:'counter',
    loadChildren:()=>import('./couter/counter.module').then((m)=>m.CounterModule),
  },
 
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'post-lists',
    loadChildren:()=>import('./posts/post.module').then((m)=>m.PostModule)
   
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
  
 }
