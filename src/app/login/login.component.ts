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
        console.log(this.formLogin);
        const user: any = {
            name: this.formLogin.value.name,
            password: this.formLogin.value.password,
            mail: 'dtzz@mail.fr'
        };
        this.matDialogRef.close(user);
    }
}
