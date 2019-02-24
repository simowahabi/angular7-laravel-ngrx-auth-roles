import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8000/api/user';

  constructor(private http: HttpClient) { }

  getuser(){
    return this.http.get(`${this.baseUrl}/getuser`);
  }}
