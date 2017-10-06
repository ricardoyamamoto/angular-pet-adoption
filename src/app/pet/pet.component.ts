import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {FormControl} from '@angular/forms';

import {Age} from '../models/age';
import {Breed} from '../models/breed';
import {Colour} from '../models/colour';
import {Pet} from '../models/pet';
import {AgeService} from '../services/age.service';
import {BreedService} from '../services/breed.service';
import {ColourService} from '../services/colour.service';
import {PetService} from '../services/pet.service';
import {PetJson} from '../models/petJson';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})

export class PetComponent implements OnInit {

  header = 'Pet';
  nameLabel = 'Pet Name';
  breedLabel = 'Breed';
  ageLabel = 'Age';
  sexLabel = 'Sex';
  colourLabel = 'Colour';
  btnSaveCaption = 'Save';
  imageUrl = environment.apiUrl + 'images';

  @Input() pet: Pet;
  petJson: PetJson;
  addedPet: Pet;
  ages: Array<Age>;
  breeds: Array<Breed>;
  colours: Array<Colour>;
  sexes = ['Male', 'Female'];

  ageCtrl: FormControl;
  breedCtrl: FormControl;
  colourCtrl: FormControl;
  sexCtrl: FormControl;

  filteredAges: Observable<Age[]>;
  filteredBreeds: Observable<Breed[]>;
  filteredColours: Observable<Colour[]>;
  filteredSex: Observable<string[]>;

  constructor(
    private router: Router,
    private location: Location,
    private petService: PetService,
    private breedService: BreedService,
    private colourService: ColourService,
    private ageService: AgeService

  ) {
    this.breeds = [];
    this.ages = [];
    this.colours = [];
    const colourObservable = this.colourService.readAll();
    const breedObservable = this.breedService.readAll();
    const ageObservable = this.ageService.readAll();
    Observable.forkJoin([colourObservable, breedObservable, ageObservable]).subscribe(results => {
      this.colours = results[0];
      this.breeds = results[1];
      this.ages = results[2];
      this.breedCtrl = new FormControl();
      this.ageCtrl = new FormControl();
      this.sexCtrl = new FormControl();
      this.colourCtrl = new FormControl();

      this.filteredBreeds = this.breedCtrl.valueChanges
        .startWith(null)
        .map(breed => breed ? this.filterBreeds(breed) : this.breeds.slice());
      this.filteredAges = this.ageCtrl.valueChanges
        .startWith(null)
        .map(age => age ? this.filterAges(age) : this.ages.slice());
      this.filteredColours = this.colourCtrl.valueChanges
        .startWith(null)
        .map(colour => colour ? this.filterColours(colour) : this.colours.slice());
      this.filteredSex = this.sexCtrl.valueChanges
        .startWith(null)
        .map(sex => sex ? this.filterSex(sex) : this.sexes.slice());
    });
  }

  ngOnInit() {
    this.pet = <Pet>{};
    this.petJson = <PetJson>{};

  }

  filterBreeds(filter: any) {
    const name = typeof filter === 'object' ? filter.description : filter;
    return name ? this.breeds.filter(breed =>
      breed.description.toLowerCase().indexOf(name.toLowerCase()) === 0) : this.breeds;
  }


  filterColours(filter: any) {
    const name = typeof filter === 'object' ? filter.description : filter;
    return this.colours.filter(colour =>
      colour.description.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  filterAges(filter: any) {
    const name = typeof filter === 'object' ? filter.description : filter;
    return this.ages.filter(age =>
      age.description.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  filterSex(name: string) {
    return this.sexes.filter( sex =>
    sex.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(object: any) {
    return object ? object.description : object;
  }

  save() {
    this.petJson.breed = [];
    this.petJson.colour = [];
    this.petJson.pictures=[];
    this.petJson.name = this.pet.name;
    this.petJson.breed.push(this.pet.breed._id);
    this.petJson.age = this.pet.age._id;
    this.petJson.sex = this.pet.sex;
    this.petJson.colour.push(this.pet.colour._id);
    this.petJson.pictures = this.pet.pictures;
    this.petJson.lastChanged = new Date().toString();


    this.petService
      .addNewPet(this.petJson)
      .subscribe(addedPet => {
        this.addedPet = addedPet;
        this.router.navigate(['search']);
      });
    console.log('Done');
  }

  onNotifyImages(images: string[]): void {
    this.pet.pictures = images;
  }


}
