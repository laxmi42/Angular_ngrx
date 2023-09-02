


// any change in  parameter the state which is used in other components is also going to be fired the observable
//this causes  the performance issue

// redux dev tools extension in chrome helps in debugging errors wheather the action is being called or not

//
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