import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../services/auth.service';
import { StorageService } from '../../../services/storage.service';


 
import * as fromRoot from '../../../store/reducers';
import * as authActions from '../../../store/actions/auth.actions';
import { ADMIN, USER } from '../../../data/data';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.error = state.errorMessage;
    });
  }

  public form = {
    email: null,
    password: null
  };
  getState: Observable<any>;
  public error = null;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private store:Store<fromRoot.State>
  ) { 

    this.getState = this.store.select(fromRoot.selectAuthListState$);

  }

 

  onSubmit() {
this.store.dispatch(new authActions.Login(this.form));   
  }

  handleResponse(data) {
 
   // this.store.dispatch({type:ACTION_LOGIN});
    //this.store.dispatch({type:SET_ROLE,role:data.user})

  }


  handleError(error) {
    this.error = error.error.error;
  }


}
