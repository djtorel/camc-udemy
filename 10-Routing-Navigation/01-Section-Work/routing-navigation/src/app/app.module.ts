import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { HttpModule } from '@angular/http';
import { ProfileDataService } from './services/profile-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    PostsComponent,
    ProfileSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ProfileDataService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
