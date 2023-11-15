import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { getShowError, getStatus } from './store/Shared/shared.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  setLoading:boolean=false
  errorMessage:any
  // showLoading!: Observable<boolean>;

  constructor(private store: Store<AppState>){}
  ngOnInit() {
    this.store.select(getShowError).subscribe((res)=>{
      console.log(res);
      console.log(res.seterrormessage);
      
      this.errorMessage=res.seterrormessage
     
      
    })
    this.store.select(getStatus).subscribe((res)=>{
      console.log(res);
      console.log(res.showloading);
      
      this.setLoading=res.showloading
     
      
    })
   
    // this.showLoading = this.store.select(getStatus);

  }
  title = 'angular-sample-application';
}
