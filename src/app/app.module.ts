import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { HomeCookComponent } from './home-cook/home-cook.component';
import {NgxPopper} from 'angular-popper';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HomeCookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
