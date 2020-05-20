import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [    
  { path: '', component:LoginComponent},
];
@NgModule({
  imports: [
    CommonModule,RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],exports: [RouterModule]
})
export class AppRoutingModule { }
