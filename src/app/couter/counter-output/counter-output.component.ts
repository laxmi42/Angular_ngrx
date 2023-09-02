import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { text } from '../state/counter.action';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
counter=0
  custom: number | undefined;
  customtext:any
constructor(private store:Store<{counter:{counter:number},customValue:{customValue:number}}>){

}
ngOnInit(){
  
  
this.store.select('counter')
console.log(this.store.select('counter'));

  this.store.select('counter').subscribe((data)=>{
    console.log("counter observable called");
    
    this.counter=data.counter
  })
  
  this.store.select('customValue').subscribe((data)=>{
    this.custom=data.customValue
    console.log(this.custom);
    
  })
}


customText(){
  this.store.dispatch(text())
}
}
