import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routesAuth: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  }
];

