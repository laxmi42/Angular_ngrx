import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { custom } from '../state/counter.action';
import { State } from '../state/counter.state';
import { getCounter, getText } from '../state/counter.selector';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  counter:any
  customvalue=0
  text:any
  constructor(private store:Store<AppState>){

  }
  ngOnInit(){
    console.log(this.store.select(getCounter));
    
    this.store.select(getCounter).subscribe((data)=>{
      this.counter=data
      
      
    })
    this.store.select(getText).subscribe((data)=>{
      console.log("text observable called");
      
      this.text=data
      console.log(this.text);
      
    })
  }
  customSubmit(){
    console.log(this.customvalue);
    this.store.dispatch(custom({value:this.customvalue}))
    

  }


}
