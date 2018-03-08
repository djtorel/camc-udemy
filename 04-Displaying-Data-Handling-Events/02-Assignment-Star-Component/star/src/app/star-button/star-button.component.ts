import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-button',
  templateUrl: './star-button.component.html',
  styleUrls: ['./star-button.component.css']
})
export class StarButtonComponent implements OnInit {
  isFavorite = false;

  constructor() { }
  ngOnInit() {
  }

}
