import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { HttpClient } from '@angular/common/http';

import { Observable, of, Subscriber } from 'rxjs';
import { Action } from '@ngrx/store';

import * as authActions from '../actions/auth.actions';

import { mergeMap, switchMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { User } from '../../model/User';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private storageService:StorageService) { }


 
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap((action: AuthActions) => {
      return this.authService.login(action.payload).
        pipe(
          map((data:User) => {
            this.saveUserToken(data)
            return new authActions.LoginSuccess(data);
          }),
          catchError((error) => {
            return of(new authActions.LoginFailure({ payload: error }));
          })
        )
    })
  );

  @Effect({ dispatch: false })
  logout$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      //when the user log out the token and email are removed from localStorage
      this.storageService.removeToken();
      this.storageService.removeRole();
      this.storageService.removeUser();
    this.router.navigateByUrl('/login');
    })
 
  );
  saveUserToken(user:User){
    this.storageService.setRole(user.role);
    this.storageService.setToken(user.access_token);
    this.storageService.setUser(user.user);
    this.storageService.handleAllRole(user.role);
  }


}
