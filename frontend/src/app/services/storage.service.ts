import { Injectable } from '@angular/core';
import { USER, ADMIN } from '../data/data';
import { Router } from '@angular/router';

@Injectable()
export class StorageService {
  private iss = {
    login: 'http://localhost:8000/api/login',
    signup: 'http://localhost:8000/api/signup'
  };

  constructor(private router: Router) { }


  setUser(user) {
    localStorage.setItem('user', user)
  }
  getUser() {
    return localStorage.getItem('user');
  }
  removeUser() {
    localStorage.removeItem('user');
  }
  setRole(role) {
    localStorage.setItem('role', role)
  }
  getRole() {
    return localStorage.getItem('role');
  }
  removeRole() {
    localStorage.removeItem('role');
  }


  setToken(token) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  isValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
  handleAllRole(role) {
    if (role == USER) {
      this.router.navigateByUrl('/user/profil')
    }
    else if (role == ADMIN) {
      this.router.navigateByUrl('/admin/profil')
    }
  }
}
