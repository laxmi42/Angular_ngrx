


// any change in  parameter the state which is used in other components is also going to be fired the observable
//this causes  the performance issue
export interface State{
    counter:number,
    customValue:number
    test:string

}
export const initialState:State={
    counter: 4,
    customValue: 1,
    test: "leela"
}