import { Injectable } from '@angular/core';
import { FormError } from './form-error.model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormErrorHandlerService {
  errorMessages = {
    required: ' is required',
  };
  constructor() { }

  check(fieldObj: FormGroup, fieldName: string, form?: FormGroup): FormError {
    if (form && form.invalid && form.errors) {
      const { shouldMatch } = form.errors;
      if (shouldMatch) {
        return { message: 'New password doesn\'t match' };
      }
    }
    if (fieldObj.invalid) {
      const { required, invalidPassword } = fieldObj.errors;
      if (required) {
        return { message: `${fieldName} is required` };
      } if (invalidPassword) {
        return { message: 'Password is invalid' };
      } else {
        return { message: 'Undhandled error' };
      }
    }
  }

}
