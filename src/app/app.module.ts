import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true, useHash: true },
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
