import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-button',
  templateUrl: './star-button.component.html',
  styleUrls: ['./star-button.component.css']
})
export class StarButtonComponent implements OnInit {
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }

}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
