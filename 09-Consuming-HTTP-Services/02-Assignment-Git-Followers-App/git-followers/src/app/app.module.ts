import { ApiDataService } from './services/api-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DisplayFollowersComponent } from './display-followers/display-followers.component';
import { DisplayErrorsComponent } from './display-errors/display-errors.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { ProfileDataService } from './services/profile-data.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DisplayFollowersComponent,
    DisplayErrorsComponent,
    ProfileSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ProfileDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
