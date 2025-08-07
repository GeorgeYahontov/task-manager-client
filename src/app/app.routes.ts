import { Routes } from '@angular/router';
import {authGuard} from '@core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path: '',
    loadChildren: () => import('./features/tasks/task.routes').then(m => m.taskRoutes),
    canActivate: [authGuard]
  }
];
