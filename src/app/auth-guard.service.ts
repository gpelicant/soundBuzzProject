import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private cookie: CookieService, private route: Router) { }

  canActivate () {
    if (this.cookie.get('AuthToken')) {
      return true;
    } else {
      this.route.navigate(['login']);
    }
  }

}
