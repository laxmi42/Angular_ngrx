
import { createReducer, on } from '@ngrx/store';
import {initialState} from './counter.state'
import { custom, decrement, increment, reset, text } from './counter.action';

const _counterReducer = createReducer(
    initialState,
 
    
    on(increment, (state) => {
        console.log(state);
console.log(state);
let customincrement=0;
console.log(state.customValue);


if(state.customValue!=null&&state.customValue!=undefined&&state.customValue!=0){
    customincrement=state.counter + state.customValue
}else{
    customincrement=state.counter+1
}
console.log(state);
      return {
        ...state,
        counter: customincrement,
      };
    }),
    on(decrement, (state) => {
      let customdecrement=0;


if(state.customValue!=null&&state.customValue!=undefined&&state.customValue!=0){
  customdecrement=state.counter - state.customValue
}else{
  customdecrement=state.counter+1
}
console.log(state);

      return {
        ...state,
        counter: customdecrement,
      };
    }),
    on(reset, (state) => {
      console.log(state);
      console.log(initialState);
      
      return {
        ...state,
        counter: 0,
        customValue:0
      };
    }),
    on(custom, (state,action) => {


        return {
          ...state,
       
          customValue:parseInt(action.value)
        };
      }),
      on(text, (state,action) => {


        return {
          ...state,
       
        text:"xwe"
        };
      })
)

export function counterReducer(state:any,action:any) {
    return  _counterReducer(state,action)
}