import {Age} from './age';
import {Breed} from './breed';
import {Colour} from './colour';

export class Pet {
  _id: string;
  name: string;
  breed: Breed;
  sex: string;
  age: Age;
  colour: Colour;
  pictures: string[];
  lastChanged: string;
}
