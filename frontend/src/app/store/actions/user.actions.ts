import { Action } from '@ngrx/store';
import { User } from '../../model/User';

export enum UserActionTypes {
  LOAD_USERS = '[User] Load Users',
  SUCCESS_INIT_USERS = '[userList] Success Init User',
  LOAD_USER = '[User] Load User',
  SUCCESS_INIT_USER = '[User] Success Init User',
  PUBLI_REQ='Public req',
  SUCCESS_PUBLI_REQ='Public Success',
  ERROR_ALL='OPS ERROR'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
  //constructor(public payload: any) {}
}
export class SuccessInitUsers implements Action{
  readonly type=UserActionTypes.SUCCESS_INIT_USERS;
  constructor(public payload:any){}
}

export class ErroALL implements Action{
  readonly type=UserActionTypes.ERROR_ALL;
  constructor(public payload:any){}
}
export class LoadUser implements Action{
  readonly type=UserActionTypes.LOAD_USER;
}
export class LoadPubli implements Action{
  readonly type=UserActionTypes.PUBLI_REQ;
}
export class SuccessLoadPubli implements Action{
  readonly type=UserActionTypes.SUCCESS_PUBLI_REQ;
  constructor(public payload:any){}
}

export class SuccessLoadUser implements Action{
  readonly type=UserActionTypes.SUCCESS_INIT_USER;
  constructor(public payload:any){}

}
export type UserActions =
LoadUsers|
SuccessInitUsers|
LoadUser|
SuccessLoadUser|
LoadPubli|
SuccessLoadPubli|
ErroALL
