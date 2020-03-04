import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthguardGuard} from './authguard.guard'
import {LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthguardGuard]},
  {path:'about', component:AboutComponent, canActivate: [AuthguardGuard]},
  {path:'contact', component:ContactComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
