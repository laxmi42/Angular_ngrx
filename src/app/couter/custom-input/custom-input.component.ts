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
  customvalue=0
  constructor(private store:Store<{customvalue:State}>){

  }
  customSubmit(){
    console.log(this.customvalue);
    this.store.dispatch(custom({value:this.customvalue}))
    

  }

}
