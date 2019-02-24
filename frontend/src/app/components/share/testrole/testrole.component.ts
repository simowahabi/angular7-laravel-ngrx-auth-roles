import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import * as userActions from '../../../store/actions/user.actions';
import { State, selectUsersLoaded$, selectAuthListState$, selectUserLoaded$, selectPubLoaded$, selectError$ } from '../../../store/reducers';
import { UserService } from '../../../services/user.service';
import { PubService } from '../../../services/pub.service';

@Component({
  selector: 'testrole',
  templateUrl: './testrole.component.html',
  styleUrls: ['./testrole.component.css']
})
export class TestroleComponent implements OnInit {
  public users$: Observable<any>;
  public user$:Observable<any>;
  public publi$:Observable<any>;
  public error$:Observable<any>;
   pubClick:boolean=false;
   adminClick:boolean=false;
   userClick:boolean=false;


  constructor(
    private router: Router,
    private store:Store<fromRoot.State>,
    private pubService:PubService
  ) {
    this.users$ = store.pipe(select(selectUsersLoaded$));
    this.user$= store.pipe(select(selectUserLoaded$));
    this.publi$=store.pipe(select(selectPubLoaded$));
    this.error$=store.pipe(select(selectError$));
   // console.log("salam",this.users$);

  }

  testAdmin(){
    this.adminClick=true;
    this.store.dispatch(new  userActions.LoadUsers());

  }
  testUser(){
    this.userClick=true;
    this.store.dispatch(new userActions.LoadUser());

  }
  testPub(){
    this.store.dispatch(new userActions.LoadPubli());

  }
  ngOnInit() {




   // console.log("salam",this.users$);

  }

}
