import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public authservice: AuthService,public router:Router,public storageService:StorageService) {}

  /*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.storageService.loggedIn){
      console.log("dekhal3");
      return next.handle(req);

    }
    else{
      console.log("dekhal1")
      return next.handle(req);
    }
    }*/

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token: string = this.storageService.getToken();

      if (token) {
          request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
      }

      if (!request.headers.has('Content-Type')) {
          request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }

      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

      return next.handle(request).pipe(
          map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
              }
              return event;
          }));
  }
}
