import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { RytrComponent } from './component/rytr/rytr.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
   
    children: [
      { path: '', redirectTo: '/writing-tool', pathMatch: 'full' },
      { path: 'writing-tool', component: RytrComponent },
    
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
  
    ]
  },






   
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
