import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../shared/music.service';
import * as moment from 'moment';
@Component({
    selector: 'app-news',
    templateUrl: './news.html'
})

export class NewsComponent implements OnInit {
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

    validDate(music) {
        const date = moment(music.date).month();
        return date >= moment().month() ? true : false;
    }
}
