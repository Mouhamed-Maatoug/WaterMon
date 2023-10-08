import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LoginService } from 'src/app/shared/services/login.service';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent {
  public hide: boolean = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    private route: Router
  ) {}

  getErrorMessage(input: FormControl) {
    if (input.hasError('required')) {
      return 'You must enter a value';
    }
    if (input.hasError('minlength')) {
      return 'min length is 10 characters';
    }
    return input.hasError('email') ? 'Not a valid email' : '';
  }
  login() {
    console.log('in Process...');
    console.log(this.email)
    console.log(this.password)
    this.loginService.login(this.email.value, this.password.value).subscribe((res) => {
      this.loginService.setToken(res.accessToken);
      console.log(localStorage.getItem('token'));
      this.route.navigate(['watermon']);
    });
  }
}
