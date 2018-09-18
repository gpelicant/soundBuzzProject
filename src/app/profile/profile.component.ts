import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegistrationValidator } from '../shared/register.validators';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.html'
})
export class ProfileComponent  implements OnInit {
    formProfile: FormGroup;
    formPassword: FormGroup;
    user: any;
    constructor(
        private fb: FormBuilder,
        @Inject(MatDialogRef) private matDialogRef: MatDialogRef<ProfileComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    ngOnInit(): void {
        this.user = this.data.user;
        this.createForm();

    }

    createForm() {
        this.formPassword = this.fb.group({
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required]
          }, {
            validator: RegistrationValidator.validate.bind(this)
          });
        this.formProfile = this.fb.group({
          name: ['', Validators.required],
          mail: ['', Validators.required],
          password: this.formPassword
        });
    }

    onSubmit () {
        this.user.login = this.formProfile.value.name;
        this.user.mail = this.formProfile.value.mail;
        this.user.password = this.formProfile.value.password;
        this.matDialogRef.close(this.user);
    }
}
