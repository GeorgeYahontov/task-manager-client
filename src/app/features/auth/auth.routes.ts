import { Routes } from '@angular/router';
import { Login } from '@auth/login/login';
import { Register } from '@auth/register/register';
import { AuthShell } from '@auth/shell/auth-shell';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthShell,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register }
    ]
  }
];
