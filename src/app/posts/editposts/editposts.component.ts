import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { getPostById } from '../state/post.selector';
import { Posts } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/post.actions';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit {
  public postForm!: FormGroup;
public id:any
  post!: Posts;
  postSubscription!: Subscription;
  constructor(private router:ActivatedRoute,private formBuilder: FormBuilder,private store:Store<AppState>,public route:Router) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(data => {
     console.log(data.get('id'));
     const id=data.get('id')
     this.store.select(getPostById,{id}).subscribe((res)=>{
      console.log(res);
    this.post=res
    console.log(this.post.description);
    
      
    })
  })
 
  this.postForm = this.formBuilder.group({

    title:  [this.post.title,[Validators.required,Validators.minLength(6),]],
    description: 
      [this.post.description,
      [Validators.required,
      Validators.minLength(10)],
    ],
  });
  }
  onEditPost(){
    console.log(this.postForm.value );
    const post:Posts={
      id:this.post.id,
      title:this.postForm.value.title,
      description:this.postForm.value.description,
    
    }
    this.store.dispatch(updatePost({post}))
    this.route.navigate(['post-lists'])
    
  }
  ngOnDestroy(){

  }
}
