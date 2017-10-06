import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Breed } from '../models/breed';
import {environment} from '../../environments/environment';

@Injectable()
export class BreedService {

  private breedUrl = environment.apiUrl + 'breed';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  readAll(): Observable<Breed[]> {
    return this.http
      .get(this.breedUrl)
      .map(response => response.json() as Breed[]);
  }


}
