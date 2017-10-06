import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Age } from '../models/age';
import {environment} from '../../environments/environment';

@Injectable()
export class AgeService {

  private ageUrl = environment.apiUrl + 'age';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  readAll(): Observable<Age[]> {
    return this.http
      .get(this.ageUrl)
      .map(response => response.json() as Age[]);
  }


}
