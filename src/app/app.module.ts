import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleNgrxComponent } from './sample-ngrx/sample-ngrx.component';
import { CounterComponent } from './couter/counter/counter.component';
import { CounterOutputComponent } from './couter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './couter/counter-buttons/counter-buttons.component';
import { counterReducer } from './couter/state/counter.reducer';
import { StoreModule } from '@ngrx/store';
import {CustomInputComponent} from './couter/custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PostListsComponent } from './posts/post-lists/post-lists.component';
import { HeaderComponent } from './header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleNgrxComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomInputComponent,
    HomeComponent,
    PostListsComponent,
    HeaderComponent,
    AddPostComponent
    
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
   
   StoreModule.forRoot(appReducer),
   StoreDevtoolsModule.instrument({
   
   // logOnly environment retricting the visual view of actions in production redux store browser
    // logOnly: environment.production
  })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
