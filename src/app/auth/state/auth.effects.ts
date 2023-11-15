import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSucess } from "./auth.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { User } from "src/app/models/User.model";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { setLoadingSpinner, showError } from "src/app/store/Shared/shared.action";
import { initialState } from "./auth.state";

@Injectable()
export class AuthEffects{
    constructor(private auth:AuthService,private actions$:Actions,private store: Store<AppState>){}
    login$ = createEffect(() => {
        return this.actions$.pipe(
          ofType(loginStart),
          exhaustMap((action) => {
            return this.auth.login(action.email, action.password).pipe(
              map((data) => {
           console.log(data);
          const user= this.auth.formatUser(data)
          console.log(user);
         console.log(initialState);
         this.store.dispatch(showError({message:''}))
          this.store.dispatch(setLoadingSpinner({status:false}))
                return loginSucess({user});
              }),
              catchError((errMsg)=>{
                console.log(errMsg)
                this.store.dispatch(setLoadingSpinner({status:false}))
              let  errMsgs=this.auth.formatErrorMessage(errMsg.error.message)
             


                return of( showError({message:errMsgs}));
              })

            );
          })
        );
      });
    

}