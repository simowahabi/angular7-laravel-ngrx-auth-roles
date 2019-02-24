import { Action } from '@ngrx/store';
import { User } from '../../model/User';
import * as userActions from '../actions/user.actions';
import { NullInjector } from '@angular/core/src/di/injector';



export interface State {
  users:User[],
  user:User,
  pub:any,
  ourerror:string

}

export const initialState: State = {
  users:null,
  user:null,
  pub:null,
  ourerror:null

};

export function reducer(state = initialState, action: userActions.UserActions): State {
  switch (action.type) {
    case userActions.UserActionTypes.LOAD_USERS:
    return {
    ...state,
    }
    case userActions.UserActionTypes.SUCCESS_INIT_USERS:
    return{
      ...state,
      users: action.payload,
    }
    case userActions.UserActionTypes.LOAD_USER:
    return{
      ...state
    }
    case userActions.UserActionTypes.SUCCESS_INIT_USER:
    return{
      ...state,
      user:action.payload,
    }
    case userActions.UserActionTypes.PUBLI_REQ:
    return{
      ...state,
    }
    case userActions.UserActionTypes.SUCCESS_PUBLI_REQ:
    return {
      ...state,
      pub:action.payload

    }
    case userActions.UserActionTypes.ERROR_ALL:
    return {
      ...state,
      ourerror:action.payload
    }


    default:
      return state;
  }
}
