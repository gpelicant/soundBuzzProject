import { FormGroup } from '@angular/forms';

export class RegistrationValidator {
    static validate(formInscription: FormGroup) {
        const password = formInscription.controls.password.value;
        const repeatPassword = formInscription.controls.repeatPassword.value;

        if (repeatPassword.length <= 0) {
            return null;
        }

        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }

        return null;

    }
}
