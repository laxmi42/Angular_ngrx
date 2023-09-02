import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { custom } from '../state/counter.action';
import { State } from '../state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  counter:any
  customvalue=0
  text:any
  constructor(private store:Store<{counter:State}>){

  }
  ngOnInit(){
    this.store.select('counter').subscribe((data)=>{
      this.counter=data.counter
      console.log(this.text);
      
    })
    this.store.select('counter').subscribe((data)=>{
      console.log("text observable called");
      
      this.text=data.test
      console.log(this.text);
      
    })
  }
  customSubmit(){
    console.log(this.customvalue);
    this.store.dispatch(custom({value:this.customvalue}))
    

  }


}
