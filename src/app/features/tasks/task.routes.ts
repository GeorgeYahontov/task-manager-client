import { Routes } from '@angular/router';
import { TaskList} from './task-list/task-list';
import {authGuard} from '@core/guards/auth-guard';

export const taskRoutes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', component: TaskList },
/*      { path: 'create', component: TaskCreate },
      { path: 'edit/:id', component: TaskEdit }*/
    ]
  }
];
