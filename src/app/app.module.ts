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
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SampleNgrxComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomInputComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   StoreModule.forRoot({counter:counterReducer,customValue:counterReducer})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
