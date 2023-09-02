import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { text } from '../state/counter.action';
import { getCounter, getCustomValue } from '../state/counter.selector';
import { State } from '../state/counter.state';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
counter=0
  custom: number | undefined;
  customtext:any
  counter$: Observable<number> | undefined;

constructor(private store:Store<AppState>){

}
ngOnInit():void{
  
  this.counter$ = this.store.select(getCounter);
console.log(this.counter$);




  this.store.select(getCounter).subscribe((data)=>{
    console.log("counter observable called");
    console.log("hii");
    console.log(data);
    console.log(data);
    
    this.counter=data
    console.log(this.counter);
    
  })
  
  this.store.select(getCustomValue).subscribe((data)=>{
    this.custom=data
    console.log(this.custom);
    
  })
}


customText(){
  this.store.dispatch(text())
}
}
