import { postState } from "./posts/state/post.state";
import { State } from "./couter/state/counter.state";
import { counterReducer } from "./couter/state/counter.reducer";
import { postReducer } from "./posts/state/post.reducer";
import { SharedState } from "./store/Shared/shared.state";
import { SharedReducer } from "./store/Shared/shared.reducer";
import { SHARED_STATE_NAME } from "./store/Shared/shared.selector";
import { AUTH_STATE_NAME } from "./auth/state/auth.selector";
import { AuthState } from "./auth/state/auth.state";
import { AuthReducer } from "./auth/state/auth.reducer";
import { SHOW_ERROR } from "./store/Shared/shared.action";



export interface AppState{
    // counter:State,
    // posts:postState,
    //giving shared state name inside brackets indicates its a selector name 
[SHARED_STATE_NAME]:SharedState,
[SHOW_ERROR]:SharedState
    // [AUTH_STATE_NAME]: AuthState;


}
export const appReducer={
    // counter:counterReducer,
    // posts:postReducer,
    [SHARED_STATE_NAME]:SharedReducer,
    [SHOW_ERROR]:SharedReducer
    // [AUTH_STATE_NAME]: AuthReducer,

}