import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

type RegisterForm = FormGroup<{
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}>;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  form: RegisterForm;

  constructor(private fb: NonNullableFormBuilder, private router: Router) {
    this.form = this.fb.group(
      {
        name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
        email: this.fb.control('', [Validators.required, Validators.email, Validators.minLength(5)]),
        password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      },
      { validators: this.passwordsMatch }
    );
  }

  private passwordsMatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const group = control as RegisterForm;
    const p = group.controls.password.value;
    const c = group.controls.confirmPassword.value;
    return p === c ? null : { passwordMismatch: true };
  };

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
