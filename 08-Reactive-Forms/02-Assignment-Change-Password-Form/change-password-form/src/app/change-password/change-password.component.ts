import { PasswordValidators } from './../password.validators';
import { FormError } from './../form-error.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormErrorHandlerService } from '../form-error-handler.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  error: FormError;

  constructor(fb: FormBuilder, public errorHandler: FormErrorHandlerService) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, PasswordValidators.invalidPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: PasswordValidators.shouldMatch
    });
  }

  ngOnInit() {
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
