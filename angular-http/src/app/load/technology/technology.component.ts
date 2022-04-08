import { Component, Input, OnInit } from '@angular/core';
import { MyPost } from '../my-post';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit,MyPost {

  @Input() post:any;
  constructor() { }

  ngOnInit(): void {
  }

}
