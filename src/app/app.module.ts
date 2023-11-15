import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleNgrxComponent } from './sample-ngrx/sample-ngrx.component';

import { counterReducer } from './couter/state/counter.reducer';
import { StoreModule } from '@ngrx/store';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PostListsComponent } from './posts/post-lists/post-lists.component';
import { HeaderComponent } from './header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { AuthEffects } from './auth/state/auth.effects';



@NgModule({
  declarations: [
    AppComponent,
    SampleNgrxComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   ReactiveFormsModule,
   StoreModule.forRoot(appReducer),
  EffectsModule.forRoot([AuthEffects]),
   StoreDevtoolsModule.instrument({
   
   // logOnly environment retricting the visual view of actions in production redux store browser
    // logOnly: environment.production
  })
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
