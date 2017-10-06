import {Component, OnInit} from '@angular/core';

import {PetService} from '../services/pet.service';
import {Pet} from '../models/pet';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  pets: Array<Pet>;
  imageUrl = environment.apiUrl + 'images';
  constructor(
    private petService: PetService) {
  }

  ngOnInit() {
    this.petService.readAll()
      .subscribe(
        pets => {
          this.pets = pets;
          console.log(this.pets);
        }
      );

  }


}


