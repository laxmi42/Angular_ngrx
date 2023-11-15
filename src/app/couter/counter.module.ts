import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CustomInputComponent } from "./custom-input/custom-input.component";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";
import { COUNTER_STATE_NAME } from "./state/counter.selector";

export const routes:Routes=[
    {
        path:'',
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

]



@NgModule({
    declarations:[CounterComponent,CounterButtonsComponent,CounterOutputComponent,CustomInputComponent,],
    imports:[FormsModule,RouterModule.forChild(routes),CommonModule,StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer)]
})

export class CounterModule{
    
}