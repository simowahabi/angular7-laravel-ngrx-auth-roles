import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducers';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { HomeComponent } from './components/public/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from './store/effects/app.effects';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { TestroleComponent } from './components/share/testrole/testrole.component';
import { UserEffects } from './store/effects/user.effects';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    AdminComponent,
    UserComponent,
    NotFoundComponent,
    HomeComponent,
    TestroleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    StoreModule.forRoot(reducers,{}),
    EffectsModule.forRoot([AppEffects, AuthEffects, UserEffects, AppEffects]),

    UserModule,
    AdminModule,
    StoreModule.forRoot(reducers, { }),
    !environment.production ? StoreDevtoolsModule.instrument() : []


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
       multi: true },
    AuthService, StorageService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
    exports:[StoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
