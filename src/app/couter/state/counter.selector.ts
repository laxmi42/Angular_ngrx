import {  createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./counter.state";

const getCounterState= createFeatureSelector<State>('counter')
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