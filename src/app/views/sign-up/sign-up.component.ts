import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatFormFieldModule,

    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SignUpComponent {
  public hide: boolean = true;

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmedPassword = new FormControl('', [Validators.required , ]);
  phone = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {
    this.confirmedPassword.setValidators([this.confirmedMatchValidator.bind(this) ,  Validators.required]);
  }

  public signIn() {}

  public getErrorMessage(input: FormControl) {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }

    if (input.hasError('confirmedMatch')) {
      return 'you must enter a confirmed password' ;
    }
    return input.hasError('email') ? 'Not a valid email' : '';
  }
  private  confirmedMatchValidator() {
    const password = this.password.value;
    const confirmedPassword = this.confirmedPassword.value;

    if (password !== confirmedPassword) {
      return { confirmedMatch: true };
    } else {
      return null;
    }
  }

}
