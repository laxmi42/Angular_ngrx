
import { createReducer, on } from '@ngrx/store';
import {initialState} from './counter.state'
import { custom, decrement, increment, reset } from './counter.action';

const _counterReducer = createReducer(
    initialState,
 
    
    on(increment, (state) => {
        console.log(state);
console.log(state);
let customincrement=0;
console.log(state.customValue);

if(state.customValue!=null&&state.customValue!=undefined){
    customincrement=state.counter + state.customValue
}else{
    customincrement=state.counter+1
}

      return {
        ...state,
        counter: customincrement,
      };
    }),
    on(decrement, (state) => {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }),
    on(reset, (state) => {
      return {
        ...state,
        counter: 0,
        customValue:0
      };
    }),
    on(custom, (state,action) => {
console.log(action);

        return {
          ...state,
       
          customValue:parseInt(action.value)
        };
      })
)

export function counterReducer(state:any,action:any) {
    return  _counterReducer(state,action)
}