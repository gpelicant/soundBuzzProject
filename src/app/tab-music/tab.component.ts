import { Component } from '@angular/core';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.html'
})
export class TabComponent {
    player: any;
    constructor() {}

    // playAud() {
    //     this.player = document.getElementById('music_player');
    //     this.player.controls = false;
    //     this.player.play();
    // }

    // pauseAud() {
    //     this.player.pause();
    // }

    // stopAud() {
    //     this.player.pause();
    //     this.player.currentTime = 0;
    // }

    // changeVol() {
    //     console.log(document.getElementById('change_vol'));
    //     this.player.volume = document.getElementById('change_vol').value;
    // }
}
