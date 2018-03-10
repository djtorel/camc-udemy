import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './star-button/star-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    title: 'Title',
    isFavorite: true,
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed.', eventArgs);
  }
}
