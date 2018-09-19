import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../shared/music.service';

@Component({
    selector: 'app-all',
    templateUrl: './all.html'
})
export class AllComponent implements OnInit {
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
}
