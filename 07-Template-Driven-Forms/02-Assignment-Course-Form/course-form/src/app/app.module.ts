import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormErrorComponent } from './form-error/form-error.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    FormErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
