import {  createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./counter.state";

const getCounterState= createFeatureSelector<State>('counter')
const getCounter=createSelector(getCounterState,state=>{

})