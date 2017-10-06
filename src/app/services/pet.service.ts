import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Pet } from '../models/pet';
import {environment} from '../../environments/environment';
import {PetJson} from '../models/petJson';

@Injectable()
export class PetService {

  private petUrl = environment.apiUrl + 'pet';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  readAll(): Observable<Pet[]> {
    return this.http
      .get(this.petUrl)
      .map(response => response.json() as Pet[]);
  }

  findById(_id: string): Observable<Pet> {
    const url = `${this.petUrl}/${_id}`;
    console.log(url);
    return this.http
      .get(url)
      .map(response => response.json() as Pet);
  }

  addNewPet(petJson: PetJson): Observable<Pet> {
    const stringifiedPet = JSON.stringify(petJson);
    return this.http
      .post(this.petUrl, stringifiedPet, {headers: this.headers})
      .map(response => response.json() as Pet);
  }

}
