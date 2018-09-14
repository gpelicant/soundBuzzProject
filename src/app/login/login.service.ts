import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { baseUrl } from '../app.service';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router, private cookie: CookieService) { }

  onLogin (login: string, password: string) {
    console.log(baseUrl);
    this.http.post(`${baseUrl}/users`, {login, password}).subscribe(
      (res: any) => {
        const data = res.json();
        const options: CookieOptions = {
          path: '/',
          expires: new Date(Date.now() + (4 * 60 * 60 * 1000)),
          httpOnly: true
        };

        this.cookie.put('AuthToken', data.access_token, options);
        this.router.navigate(['']);
      },
      err => {
        console.log('err', err);
      }
    );
  }
}
