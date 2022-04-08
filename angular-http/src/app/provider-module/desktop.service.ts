import { Injectable } from '@angular/core';
import { Computer } from './computer';

@Injectable({
  providedIn: 'root'
})
export class DesktopService implements Computer{

  constructor() { }
  getComputerName(): string {
    return 'DESKTOP';
  }
}
