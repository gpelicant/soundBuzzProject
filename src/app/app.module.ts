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
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './tab-music/news/news.component';
import { TopComponent } from './tab-music/top/top.component';
import { LastComponent } from './tab-music/last/last.component';

import { AuthGuardService } from './AuthGuardService';
import { InscriptionService } from './inscription/inscription.service';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { UserService } from './shared/user.service';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  { path: 'home', component: TabComponent },
  { path: 'profil', component: PageProfileComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    LoginComponent,
    InscriptionComponent,
    ProfileComponent,
    PageProfileComponent,
    NewsComponent,
    TopComponent,
    LastComponent,
    UploadComponent
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
    AuthGuardService,
    UserService
  ],
  entryComponents: [
    LoginComponent,
    InscriptionComponent,
    ProfileComponent,
    UploadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
