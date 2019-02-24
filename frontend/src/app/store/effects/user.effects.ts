import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';
import { PubService } from '../../services/pub.service';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as userActions from '../actions/user.actions';
import * as authActions from '../actions/auth.actions';

import { UserActionTypes,UserActions } from '../actions/user.actions';
import { Store } from '@ngrx/store';

import { mergeMap, switchMap, map, catchError, tap } from 'rxjs/operators';
import { User } from '../../model/User';
import { Token_Exp } from '../../data/data';
import * as fromRoot from '../../store/reducers';



@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
    private router: Router,
    private storageService:StorageService,
    private pubService:PubService,
    private userService:UserService,
    private adminService:AdminService,
    private store:Store<fromRoot.State>


     ) {}
     @Effect()
     getAlluser$: Observable<Action> = this.actions$.pipe(
       ofType(UserActionTypes.LOAD_USERS),
       switchMap((action: UserActions) => {
         return this.adminService.getAllUser().
           pipe(
             map((data:User[]) => {

               return new userActions.SuccessInitUsers(data);
             }),
             catchError((error) => {

              if(error.error.status===Token_Exp){
                this.store.dispatch(new authActions.Logout(""));

             }
               return of(new userActions.ErroALL(error.error));
             })
           )
       })
     );

     @Effect()
     getuser$: Observable<Action> = this.actions$.pipe(
       ofType(UserActionTypes.LOAD_USER),
       switchMap((action: UserActions) => {
         return this.userService.getuser().
           pipe(
             map((data:User) => {
               return new userActions.SuccessLoadUser(data);
             }),
             catchError((error) => {
              if(error.error===Token_Exp){
                this.store.dispatch(new authActions.Logout(""));


              }
              return of(new userActions.ErroALL(error.error));
            })
           )
       })
     );

     @Effect()
     getPubli$: Observable<Action> = this.actions$.pipe(
       ofType(UserActionTypes.PUBLI_REQ),
       switchMap((action: UserActions) => {
         return this.pubService.getPub().
           pipe(
             map((data:any) => {
               return new userActions.SuccessLoadPubli(data);
             }),
             catchError((error) => {

              return of(new userActions.ErroALL(error.error));
             })
           )
       })
     );


}
