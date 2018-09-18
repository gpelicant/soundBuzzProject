import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../shared/user.service';
import { Http } from '@angular/http';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { baseUrl } from '../app.service';

@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.html'
})
export class PageProfileComponent implements OnInit {
    user: any;
    constructor(
        private userService: UserService,
        @Inject(MatDialog) private matDialog: MatDialog,
        private http: Http,
        private cookie: CookieService
    ) {}

    ngOnInit(): void {
        this.user = this.userService.getUser();
    }

    openProfile(): void {
        const dialogRef = this.matDialog.open(ProfileComponent, {
          width: '700px',
          data: {user: this.user}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.user = result;
                const login = result.login;
                const mail = result.mail;
                const password = result.password.password;
                this.http.post(`http://${baseUrl}/user/${result.id}`, {login, mail, password}).subscribe(
                    (res: any) => {
                        const data = res.json();
                        const options: CookieOptions = {
                            path: '/',
                            expires: new Date(Date.now() + (4 * 60 * 60 * 1000)),
                            httpOnly: true
                        };
                        this.user = data;
                        this.userService.setUser(this.user);
                        this.cookie.put('AuthToken', data.access_token, options);
                    },
                    err => {
                        console.log('err', err);
                    });
            }
        });
      }
}
