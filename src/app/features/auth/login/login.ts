import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

type LoginForm = FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
}>;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  form: LoginForm;

  constructor(private fb: NonNullableFormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email, Validators.minLength(5)],
      }),
      password: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    localStorage.setItem('access_token', 'dev-token');
    this.router.navigate(['/']).then();
  }
}
