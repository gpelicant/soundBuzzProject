import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../shared/music.service';
import * as moment from 'moment';
@Component({
    selector: 'app-artist',
    templateUrl: './artist.html'
})

export class ArtistComponent implements OnInit {
    musics: any;
    selectedValue: string;
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
