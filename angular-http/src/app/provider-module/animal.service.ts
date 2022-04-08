import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  name = 'Animal';
  food = 'Food';
  constructor() { }
  getName() {
    return this.name;
  }
  getFood() {
    return this.food;
  }
}
