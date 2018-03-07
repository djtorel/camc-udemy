import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  title = 'Angular';
  authors: string[];
  authorNumber: number;

  constructor(authorService: AuthorsService) {
    this.authors = authorService.getAuthors();
    this.authorNumber = this.authors.length;
  }

  ngOnInit() {
  }

}
