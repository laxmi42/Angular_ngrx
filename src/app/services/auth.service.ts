import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { Observable } from "rxjs";
import { AuthResponse } from "../models/AuthResponseData.model";
import { User } from "../models/User.model";
@Injectable({
    providedIn:'root'
})

export class AuthService{
 
    constructor(private http:HttpClient){

    }
   
      login(username:string,password:string):Observable<AuthResponse>{
       return  this.http.post<AuthResponse>(`https://dummyjson.com/auth/login`,{username,password,returnSecureToken:true})
    }
    
    formatUser(data: AuthResponse) {
       
       let user =new User(data.email,data.token,data.username)
        return user;
      }
      formatErrorMessage(message:any){
        console.log(message)
        switch(message){
        case 'Invalid credentials':
        return 'Invalid credentials'
        case 'Invalid Email':
        return 'Invalid Email'
        default :
        return 'unknown error'
        }

      }
   
}