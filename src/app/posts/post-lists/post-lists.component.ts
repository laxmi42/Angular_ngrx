import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getPosts } from '../state/post.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent {
  posts:any
  public postForm!: FormGroup;
  constructor(private store: Store<AppState>){

  }
ngOnInit():void{
this.store.select(getPosts).subscribe((res)=>{
  console.log(res);
  this.posts=res
  
})

}

}
