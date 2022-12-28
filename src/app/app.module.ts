import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RytrComponent } from './component/rytr/rytr.component';
import { NgxEditorModule } from 'ngx-editor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxSpinnerModule } from "ngx-spinner";
import { RegistrationComponent } from './component/registration/registration.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { AuthService } from './shared/Services/auth.service';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RytrComponent,
    RegistrationComponent,
    DefaultLayoutComponent,
    LoginLayoutComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxEditorModule,
    FormsModule ,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgMultiSelectDropDownModule.forRoot()
    
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy } ,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
