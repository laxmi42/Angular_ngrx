import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { postState } from '../state/post.state';
import { ADD_POST, addPost } from '../state/post.actions';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { Posts } from 'src/app/models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  public postForm!: FormGroup;
   
  
  constructor(private formBuilder: FormBuilder,private store:Store<AppState>){
 
  }
  ngOnInit():void{
    this.postForm = this.formBuilder.group({

      title:  ['',Validators.required,Validators.minLength(6),],
      description: ['',
        Validators.required,
        Validators.minLength(10),
      ],
    });

  }
  public updateUserProfile(): void {
  }
 
  onAddPost(){
console.log(this.postForm.value);
const post:Posts={
  title:this.postForm.value.title,
  description:this.postForm.value.description,

}
this.store.dispatch(addPost({post}))

  }
}
