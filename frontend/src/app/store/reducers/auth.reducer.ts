import * as authActions from '../actions/auth.actions';
import { flatten } from '@angular/core/src/render3/util';
import { User } from '../../model/User';

export interface State {
  user:User ;
  role:string;
  isAuth:boolean;
  errorMessage: string | null;

}

export const initialState: State = {
  user: null,
  role:'0',
  isAuth: localStorage.getItem('Token')!==null,
  errorMessage: null
};



export function reducer(state = initialState, action: authActions.AuthActions): State {
  switch (action.type) {
    case authActions.AuthActionTypes.LOGIN_SUCCESS:
      return handleSucess(state, action);
    case authActions.AuthActionTypes.LOGIN_FAILURE:
       return handleFailure(state, action);
    case authActions.AuthActionTypes.LOGOUT:
    return initialState;   



    default:
      return state;
  }
}

function handleSucess(state: State, action: authActions.LoginSuccess): State {
   return {
    ...state,
    isAuth:true,
    user: action.payload,
    role: action.payload.role
  };
}
function handleFailure(state: State, action: authActions.LoginFailure): State {
  return {
   ...state,
   errorMessage: "Email or password does't exist",
   
 };




}

