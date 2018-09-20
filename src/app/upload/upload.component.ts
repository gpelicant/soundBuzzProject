import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.html'
})
export class UploadComponent implements OnInit {
    formUpload: FormGroup;
    constructor(
        private fb: FormBuilder,
        @Inject(MatDialogRef) private matDialogRef: MatDialogRef<UploadComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
    ngOnInit(): void {
        this.createForm();
    }
    createForm(): any {
        this.formUpload = this.fb.group({
            title: ['', Validators.required],
            artist: ['', Validators.required],
            image: [null, Validators.required],
            description: [''],
            date_creation: ['', Validators.required],
        });
    }

    onSubmit(): any {
        this.matDialogRef.close();
    }
}
