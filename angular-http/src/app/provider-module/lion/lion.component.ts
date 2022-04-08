import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { LionService } from '../lion.service';

@Component({
  selector: 'app-lion',
  templateUrl: './lion.component.html',
  styleUrls: ['./lion.component.scss'],
  providers:[{provide:AnimalService,useClass:LionService}]
})
export class LionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
