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
import { TabComponent } from './tab-music/tab.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NewsComponent } from './tab-music/news/news.component';
import { TopComponent } from './tab-music/top/top.component';
import { LastComponent } from './tab-music/last/last.component';
import { AuthGuardService } from './AuthGuardService';
import { InscriptionService } from './inscription/inscription.service';

const routes: Routes = [
  { path: 'home', component: TabComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    LoginComponent,
    InscriptionComponent,
    NewsComponent,
    TopComponent,
    LastComponent
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
    InscriptionService,
    AuthGuardService
  ],
  entryComponents: [
    LoginComponent,
    InscriptionComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
