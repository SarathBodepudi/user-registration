import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { LoginComponent } from './app/login/login.component';
import { RegistrationComponent } from './app/registration/registration.component';

export const appRoutes: Routes = [
  {path: 'register', component: HomeComponent},
  {path: 'register/login', component: LoginComponent},
  {path: 'register/new', component: RegistrationComponent},
  {path: '', redirectTo: '/register', pathMatch: 'full'}
];
