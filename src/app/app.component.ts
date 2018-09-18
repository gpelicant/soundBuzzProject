import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionService } from './inscription/inscription.service';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { Http } from '@angular/http';
import { baseUrl } from './app.service';
import { Router } from '@angular/router';

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
    private http: Http,
    private router: Router,
    private cookie: CookieService
    ) {}

    openLogin(): void {
        const dialogRef = this.matDialog.open(LoginComponent, {
            width: '700px'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
          this.user = result;
          this.http.get(`http://${baseUrl}/users`).subscribe(
            (res: any) => {
              const data = res.json();
              data.forEach(d => {
                if (d.login === this.user.name && d.password === this.user.password) {
                  this.log = true;
                }
              });
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
            });
        });
    }

    openInscription(): void {
      const dialogRef = this.matDialog.open(InscriptionComponent, {
        width: '700px'
      });
      dialogRef.afterClosed().subscribe(result => {
        this.user = result;
        this.inscription.onCreate(this.user.name, this.user.password, this.user.mail);
      });
    }
}
