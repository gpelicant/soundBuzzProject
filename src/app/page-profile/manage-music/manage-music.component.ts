import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-manage-music',
    templateUrl: './manage-music.html'
})
export class ManageMusicComponent  implements OnInit {
    formMusic: FormGroup;
    music: any;
    constructor(
        private fb: FormBuilder,
        @Inject(MatDialogRef) private matDialogRef: MatDialogRef<ManageMusicComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit(): void {
        this.music = this.data.music;
        this.createForm();
    }

    createForm() {
        this.formMusic = this.fb.group({
          title: ['', Validators.required],
          artist: ['', Validators.required],
        });
    }

    onSubmit () {
        this.music.title = this.formMusic.value.title;
        this.music.artist = this.formMusic.value.artist;
        this.matDialogRef.close(this.music);
    }
}
