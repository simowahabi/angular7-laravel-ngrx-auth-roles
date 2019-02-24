import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8000/api/admin';

  constructor(private http: HttpClient) { }

  getAllUser(){
    return this.http.get(`${this.baseUrl}/getAllUser`);
  }
}
