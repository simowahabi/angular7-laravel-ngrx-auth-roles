import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { StorageService } from '../../../services/storage.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    //private store:Store<appReducerState>

  ) { }

  onSubmit() {
    this.authService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
  /*  this.storageService.handleToken(data.access_token);
    this.storageService.handelRole(data.role);
    this.storageService.handelUser(data.user);
    this.store.dispatch({type:ACTION_LOGIN});
    this.store.dispatch({type:SET_ROLE,role:data.user})
    this.storageService.handleAllRole(data.role);*/
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
