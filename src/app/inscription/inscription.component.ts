import { Component, OnInit, Inject, createPlatformFactory } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { RegistrationValidator } from '../shared/register.validators';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.html'
})
export class InscriptionComponent  implements OnInit {
    formInscription: FormGroup;
    formPassword: FormGroup;
    constructor(
        private fb: FormBuilder,
        @Inject(MatDialogRef) private matDialogRef: MatDialogRef<InscriptionComponent>,
    ) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.formPassword = this.fb.group({
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required]
          }, {
            validator: RegistrationValidator.validate.bind(this)
          });
        this.formInscription = this.fb.group({
          name: ['', Validators.required],
          mail: ['', Validators.email],
          password: this.formPassword
        });
    }

    onSubmit () {
        console.log('submit');
        this.matDialogRef.close();
    }
}
