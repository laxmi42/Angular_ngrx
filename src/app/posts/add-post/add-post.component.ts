import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  public postForm!: FormGroup;
   
  
  constructor(private formBuilder: FormBuilder){
 
  }
  ngOnInit():void{
    this.postForm = this.formBuilder.group({

      title:  [Validators.required,Validators.minLength(6),],
      description: [
        Validators.required,
        Validators.minLength(10),
      ],
    });

  }
  public updateUserProfile(): void {
  }
  // showDescriptionErrors() {
  //   const descriptionForm = this.postForm.get('description');
  //   if (descriptionForm?.touched && !descriptionForm.valid) {
  //     if (descriptionForm.errors.) {
  //       return 'Description is required';
  //     }

  //     if (descriptionForm.errors && descriptionForm.errors. ) {
  //       return 'Description should be of minimum 10 characters length';
  //     }
  //   }
  // }
  onAddPost(){
console.log(this.postForm.value);

  }
}
