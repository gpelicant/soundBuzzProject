import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private cookie: CookieService, private route: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.cookie.get('AuthToken');
    if (accessToken) {
      return next.handle(req.clone({
        setHeaders: {
          'X-Access-Token': accessToken,
          'X-UI'          : 'backoffice',
          'content-type'  : 'application/json; charset=utf-8'
        }
      }));
    } else {
      this.route.navigate(['']);
    }
  }
}
