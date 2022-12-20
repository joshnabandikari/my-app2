import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { BankComponent } from './bank/bank.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartAppComponent } from './flipkart-app/flipkart-app.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { VehicleComponent } from './vehicle/vehicle.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent , canActivate:[AuthenticationGuard],children:[{path:'home',component:HomeComponent},
{path:'calculator',component:CalculatorComponent},
{path:'rectangle',component:RectangleComponent},
{path:'directives',component:DirectivesComponent},
{path:'data-binding',component:DataBindingComponent},
{path:'gpay',component:GpayComponent},
{path:'flipkart',component:FlipkartComponent},
{path:'vehicle',component:VehicleComponent},
{path:'bank',component:BankComponent},
{path:'flipkart-app',component:FlipkartAppComponent},
{path:'mail',component:MailComponent},
{path:'boredom',component:BoredomComponent},
{path:'create-vehicle',component:CreateVehicleComponent},
{path:'create-student',component:CreateStudentComponent}
  
]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
