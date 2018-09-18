import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionService } from './inscription/inscription.service';
import { UserService } from './shared/user.service';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { Http } from '@angular/http';
import { baseUrl } from './app.service';
import { Router } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UploadComponent } from './upload/upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'SoundBuzz';
  user: any;
  checkUser: any;
  log: boolean;
  constructor(
    @Inject(MatDialog) private matDialog: MatDialog,
    private inscription: InscriptionService,
    private userService: UserService,
    private http: Http,
    private router: Router,
    private cookie: CookieService
    ) {}

    openLogin(): void {
        const dialogRef = this.matDialog.open(LoginComponent, {
            width: '700px'
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.user = result;
            this.http.get(`http://${baseUrl}/users`).subscribe(
              (res: any) => {
                const data = res.json();
                console.log('data', data);
                data.forEach(d => {
                  if (d.login === this.user.name && d.password === this.user.password) {
                    console.log('user', d);
                    this.log = true;
                    this.user = d;
                  }
                });
                const options: CookieOptions = {
                  path: '/',
                  expires: new Date(Date.now() + (4 * 60 * 60 * 1000)),
                  httpOnly: true
                };
                this.cookie.put('AuthToken', data.access_token, options);
                this.router.navigate(['']);
                this.userService.setUser(this.user);
              },
              err => {
                console.log('err', err);
              });
            }
        });
    }

    openInscription(): void {
      const dialogRef = this.matDialog.open(InscriptionComponent, {
        width: '700px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.user = result;
          this.inscription.onCreate(this.user.name, this.user.password, this.user.mail);
        }
      });
    }

    onUpload(): void {
      const dialogRef = this.matDialog.open(UploadComponent, {
        width: '700px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('work in progress');
        }
      });
    }
}
