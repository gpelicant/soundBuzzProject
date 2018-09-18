import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.html'
})
export class LoginComponent  implements OnInit {
    formLogin: FormGroup;
    constructor(
        private fb: FormBuilder,
        @Inject(MatDialogRef) private matDialogRef: MatDialogRef<LoginComponent>,
    ) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.formLogin = this.fb.group({
          name: ['', Validators.required],
          password: ['', Validators.required]
        });
    }

    onSubmit () {
        const user: any = {
            name: this.formLogin.value.name,
            password: this.formLogin.value.password,
        };
        this.matDialogRef.close(user);
    }
}
