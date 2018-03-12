import { ValidationErrors, AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static invalidPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((control.value as string).toLowerCase() !== 'abc123') {
          resolve ({ invalidPassword: true });
        } else {
          resolve (null);
        }
      }, 2000);
    });
  }

  static shouldMatch(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value) {
      return { shouldMatch: true };
    }

    return null;
  }
}
