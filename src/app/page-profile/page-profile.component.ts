import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';
import { UserService } from '../shared/user.service';
import { Http } from '@angular/http';
import { baseUrl } from '../app.service';
import { MusicService } from '../shared/music.service';
import { ManageMusicComponent } from './manage-music/manage-music.component';

@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.html'
})
export class PageProfileComponent implements OnInit {
    user: any;
    musics: any;
    isMusics = [];
    constructor(
        private userService: UserService,
        private musicService: MusicService,
        @Inject(MatDialog) private matDialog: MatDialog,
        private http: Http,
    ) {}

    ngOnInit(): void {
        this.user = this.userService.getUser();
        this.musics = this.musicService.getMusic();
        this.musics.forEach(music => {
            if (music.user === this.user.login) {
                this.isMusics.push(music);
            }
        });
    }

    getLinkImage(music) {
        return music.linkImage;
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
                        this.user = data;
                    },
                    err => {
                        console.log('err', err);
                    });
            }
        });
      }

      modify(music) {
        const dialogRef = this.matDialog.open(ManageMusicComponent, {
            width: '700px',
            data: {music: music}
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                music = result;
                this.musics.forEach(oldMusic => {
                    if (oldMusic.linkMusic === music.linkMusic) {
                        return oldMusic = music;
                    }
                });
            }
        });
      }
}
