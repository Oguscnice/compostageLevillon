import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formBuilder: FormBuilder = inject(FormBuilder)
    
  signInForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', Validators.required],
  });
  
}
