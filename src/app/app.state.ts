import { postState } from "./posts/state/post.state";
import { State } from "./couter/state/counter.state";
import { counterReducer } from "./couter/state/counter.reducer";
import { postReducer } from "./posts/state/post.reducer";



export interface AppState{
    counter:State,
    posts:postState
}
export const appReducer={
    counter:counterReducer,
    posts:postReducer
}