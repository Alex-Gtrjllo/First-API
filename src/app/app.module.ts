import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashaboardComponent } from './dashaboard/dashaboard.component';

import {HttpClientModule} from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrderUpComponent } from './order-up/order-up.component';
import { ProductComponent } from './product/product.component';
import { ProviderComponent } from './provider/provider.component';
import { SaleComponent } from './sale/sale.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { InicioComponent } from './inicio/inicio.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashaboardComponent,
    LandingPageComponent,
    OrderUpComponent,
    ProductComponent,
    ProviderComponent,
    SaleComponent,
    UserComponent,
    HeaderComponent,
    DashboardComponent,
    SigninComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
