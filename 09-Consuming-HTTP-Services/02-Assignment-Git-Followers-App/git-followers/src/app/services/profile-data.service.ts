import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';

@Injectable()
export class ProfileDataService extends ApiDataService {

  constructor(http: Http) {
    super('https://api.github.com/users', http);
  }

}
