import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../shared/music.service';

@Component({
    selector: 'app-top',
    templateUrl: './top.html'
})
export class TopComponent implements OnInit {
    musics: any;
    constructor(
        private musicService: MusicService,
    ) {  }

    ngOnInit(): void {
        this.musics = this.musicService.getMusic();
    }

    getLinkImage(music) {
        return music.linkImage;
    }

    getLinkMusic(music) {
        return music.linkMusic;
    }

    validTop(music) {
        let topCounter = 0;
        console.log('begin', topCounter);
        this.musics.forEach(el => {
            if (el.top > topCounter) {
                topCounter = el.top;
                console.log('after', topCounter);
            }
        });
        topCounter /= 2;
        console.log('counter', topCounter);
        return music.top > topCounter ? true : false;
    }
}
