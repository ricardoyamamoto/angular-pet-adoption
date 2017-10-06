import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Colour } from '../models/colour';
import {environment} from '../../environments/environment';

@Injectable()
export class ColourService {

  private colourUrl = environment.apiUrl + 'colour';

  constructor(private http: Http) {}

  readAll(): Observable<Colour[]> {
    return this.http
      .get(this.colourUrl)
      .map(response => response.json() as Colour[]);
  }


}
