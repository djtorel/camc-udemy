import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormErrorDisplayComponent } from './form-error-display/form-error-display.component';
import { FormErrorHandlerService } from './form-error-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    FormErrorDisplayComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
