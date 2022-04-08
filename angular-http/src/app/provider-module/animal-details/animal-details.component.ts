import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss']
})
export class AnimalDetailsComponent implements OnInit {

  name:string ='';
  food:string='';
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.name = this.animalService.getName();
    this.food = this.animalService.getFood();
  }

}
