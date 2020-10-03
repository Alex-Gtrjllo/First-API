import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : '', redirectTo : 'login-component', pathMatch : 'full'},  
  { path: 'login-component', component : LoginComponent },
  { path: 'landing-page', component : LandingPageComponent },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'sigin', component : SigninComponent },
  { path: 'inicio', component : InicioComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'user', component : UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
