import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';
import { AuthService } from '../../../services/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import { AuthActionTypes } from '../../../store/actions/auth.actions';
import { State } from '../../../store/reducers';
import * as authActions from '../../../store/actions/auth.actions';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;
  public role:string;
  state:State;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private authService:AuthService,
    private store:Store<fromRoot.State>

  ) { }

  ngOnInit() {
    //this.store.

    this.store.select(state => state.auth).subscribe((state)=>{


        this.loggedIn=this.storageService.loggedIn();
        this.role=this.storageService.getRole();

    });


  }

  logout(): void {
    this.store.dispatch(new authActions.Logout(""));


  }

}
