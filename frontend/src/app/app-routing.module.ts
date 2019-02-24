import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password/response-reset/response-reset.component';
import { PublicGuard } from './guard/public.guard';
import { UserGuard } from './guard/user.guard';
import { routes as AdminRoute } from './components/admin/admin.routes';
import { routes as UserRoute } from './components/user/user.routes';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { HomeComponent } from './components/public/home/home.component';



export const appRoutes: Routes = [
  ...AdminRoute,
  ...UserRoute,
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [PublicGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [PublicGuard]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [PublicGuard]
  },
  {
    
    path:'notFound',
    component:NotFoundComponent
  },
  {
    path      : '**',
    redirectTo: 'notFound'
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
