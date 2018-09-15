import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionService } from './inscription/inscription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'SoundBuzz';
  user: any;
  constructor(
    @Inject(MatDialog) private matDialog: MatDialog,
    private lg: LoginService,
    private inscription: InscriptionService
    ) {}

    openLogin(): void {
        const dialogRef = this.matDialog.open(LoginComponent, {
            width: '700px'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed', result);
          this.user = result;
          this.lg.onLogin(this.user.name, this.user.password, this.user.mail);
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
