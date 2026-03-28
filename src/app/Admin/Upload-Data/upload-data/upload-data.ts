import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-upload-data',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './upload-data.html',
  styleUrl: './upload-data.css',
})
export class UploadData {

  public showSearch = false;
  public userForm = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]*$') // Only letters and spaces
    ])
  });
  public usernameDisplay = toSignal(this.userForm.controls.username.valueChanges, { initialValue: '' });


  get isInvalid() {
    const control = this.userForm.get('username');
    return control?.invalid && (control?.dirty || control?.touched);
  }

  get isInvalid2() {
    const control = this.userForm.get('lastname');
    return control?.invalid && (control?.dirty || control?.touched);
  }

  
  inputValue = signal('');
  
  // Signal to track if user is currently typing
  isFocused = signal(false);

  onFocus() {
    this.isFocused.set(true);
    console.log('Label is now at the top-left!');
  }

  onBlur() {
    this.isFocused.set(false);
  }
  
  public toggleSearch()
  {
    this.showSearch = !this.showSearch;
  }

}
