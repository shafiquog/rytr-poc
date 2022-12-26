import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RytrComponent } from './component/rytr/rytr.component';

const routes: Routes = [
  { path: '', redirectTo: '/writing-tool', pathMatch: 'full' },
  // { path: 'login-form', component: LoginComponent },
  { path: 'writing-tool', component: RytrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
