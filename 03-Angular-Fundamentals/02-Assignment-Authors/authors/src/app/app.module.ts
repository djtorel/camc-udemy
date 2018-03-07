import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorsService } from './authors.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
