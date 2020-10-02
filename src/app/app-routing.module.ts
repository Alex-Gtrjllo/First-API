import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : '', redirectTo : 'login-component', pathMatch : 'full'},  
  { path: 'login-component', component : LoginComponent },
  { path: 'landing-page', component : LandingPageComponent },
  { path: 'user', component : UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
