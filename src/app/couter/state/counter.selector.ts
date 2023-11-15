import {  createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./counter.state";
export const COUNTER_STATE_NAME='counter'
const getCounterState= createFeatureSelector<State>(COUNTER_STATE_NAME)
export const getCounter=createSelector(getCounterState,state=>{
    console.log(state.counter);
    
    return state.counter

})
export const getText=createSelector(getCounterState,state=>{
    return state.test

})
export const getCustomValue=createSelector(getCounterState,state=>{
    return state.customValue

})