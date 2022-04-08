import { Injectable } from '@angular/core';
import { Computer } from './computer';

@Injectable({
  providedIn: 'root'
})
export class LaptopService implements Computer{

  constructor() { }
  getComputerName(): string {
    return 'LAPTOP';
  }
}
