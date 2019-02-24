import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { USER } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if( this.storageService.loggedIn())
    if(this.storageService.getRole()==USER)
    return true;
    return false;


  }
  constructor(private storageService: StorageService) { }
}
