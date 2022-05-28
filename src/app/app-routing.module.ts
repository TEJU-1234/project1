import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/navbar/contact/contact.component';
import { AboutComponent } from './components/navbar/about/about.component';
import { LoginComponent } from './components/navbar/login/login.component';
import { RegisterComponent } from './components/navbar/register/register.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/navbar/home/home.component';





const routes: Routes = [
  {path:'',redirectTo:'/header/category' , pathMatch: "full"},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  { path:'login', component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'product',component:ProductComponent},
  { path:'home', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
