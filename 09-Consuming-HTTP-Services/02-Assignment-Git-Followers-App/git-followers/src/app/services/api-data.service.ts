import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiDataService {

  constructor(private url: string, private http: Http) {
  }

  getFollowers(id) {
    return this.http.get(`${this.url}/${id}/followers`)
      .map(response => response.json());
  }

}
