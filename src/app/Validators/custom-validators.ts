import { AbstractControl,ValidationErrors } from "@angular/forms";
export function strongpasswordValidation(control:AbstractControl):ValidationErrors | null{ 
    const value = control.value;
    if(!value) return null;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return strongPasswordRegex.test(value) ? null : { strongPassword: true };

}