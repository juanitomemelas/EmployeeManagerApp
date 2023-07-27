import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { routing } from "./app.routing";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


@NgModule({
  declarations: [AppComponent, 
    LoginComponent, 
    RegisterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
