import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { CookieModule } from 'ngx-cookie';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

import { LoginService } from './login/login.service';
import { AuthGuardService } from './AuthGuardService';
import { InscriptionService } from './inscription/inscription.service';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false, useHash: true },
    ),
    CookieModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule,
  ],
  providers: [
    BrowserAnimationsModule,
    MaterialModule,
    LoginService,
    InscriptionService,
    AuthGuardService
  ],
  entryComponents: [
    LoginComponent,
    InscriptionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
