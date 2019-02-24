import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromUser from './user.reducer';
import { UserService } from '../../services/user.service';
import { UserRoute } from '../../components/user/user.routes';

export interface State {

  auth: fromAuth.State;
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {

  auth: fromAuth.reducer,
  user: fromUser.reducer,
};
//export const selectAuthenticationState = createFeatureSelector<State>('auth');

// La première fonction amène vers le state matieres
export const selectUserListState$ = (state: State) =>  state.user;
export const selectAuthListState$=(state:State)=>state.auth;
export  const  selectUsersLoaded$=createSelector(selectUserListState$, (users) =>  users.users);
export const selectUserLoaded$=createSelector(selectUserListState$,(user)=>user.user);
export const selectPubLoaded$=createSelector(selectUserListState$,(pub)=>pub.pub);
export const selectError$=createSelector(selectUserListState$,(err)=>err.ourerror);





//export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
