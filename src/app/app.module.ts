import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TestComponent } from './test/test.component';
import { DirectivesComponent } from './directives/directives.component';
import { GpayComponent } from './gpay/gpay.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from "@angular/common/http";
import { BankComponent } from './bank/bank.component';
import { FlipkartAppComponent } from './flipkart-app/flipkart-app.component';
import { MailComponent } from './mail/mail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    RectangleComponent,
    TestComponent,
    DirectivesComponent,
    GpayComponent,
    FlipkartComponent,
    VehicleComponent,
    BankComponent,
    FlipkartAppComponent,
    MailComponent,
    BoredomComponent,
    CreateVehicleComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
