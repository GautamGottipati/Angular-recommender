import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'navbar',component:NavBarComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
