import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';

@Injectable()
export class PostService extends ApiDataService {
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
