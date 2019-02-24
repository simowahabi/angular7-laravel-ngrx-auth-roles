import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PubService {
  private baseUrl = 'http://localhost:8000/api/pub';

  constructor(private http: HttpClient) { }

  getPub(){
    return this.http.get(`${this.baseUrl}/getpublic`);
  }

}
