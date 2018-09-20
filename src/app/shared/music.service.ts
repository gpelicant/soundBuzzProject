import { Injectable } from '@angular/core';

@Injectable()
export class MusicService {
    musics: any[] = [
        { linkImage: 'assets/images/arthas.jpg', top: 100, artist: 'Blizzard', user: 'test', title: 'Arthas, my son',
            linkMusic: 'assets/music/world-of-warcraft-arthas-my-son-lyrics.mp3', date: '10/01/2018'},
        { linkImage: 'assets/images/bad_wolves.jpg', top: 1040, artist: 'bad wolves', user: 'gpelicant', title: 'Zombies',
            linkMusic: 'assets/music/bad-wolves-zombie-official-audio.mp3', date: '05/04/2018'},
        { linkImage: 'assets/images/bigflo&oli.jpg', top: 678, artist: 'big flo et oli', user: 'gpelicant', title: 'rap',
            linkMusic: 'assets/music/bigflo-et-oli-je-suis-clip-officiel-2016.mp3', date: '26/09/2018'},
        { linkImage: 'assets/images/hangdrum.jpg', top: 23, artist: 'hang drum', user: 'test', title: 'Hang Drum',
            linkMusic: 'assets/music/hang-massive-once-again-2011-hang-drum-duo-hd.mp3', date: '14/09/2018'},
    ];

    constructor() { }

    getMusic() {
        return this.musics;
    }
}
