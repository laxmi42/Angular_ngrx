import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {

  counter=0

  constructor(private store:Store<{counter:{counter:number},customValue:{customValue:number}}>){

  }
  increment(){
    
    this.store.dispatch(increment())


  }
decrement(){

this.store.dispatch(decrement())
}
reset(){

this.store.dispatch(reset())
}

}
