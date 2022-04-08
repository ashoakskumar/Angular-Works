import { Component, OnInit } from '@angular/core';
import { DesktopService } from '../desktop.service';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss'],
  providers:[LaptopService,{provide:DesktopService,useExisting:LaptopService}]
})
export class ComputerComponent implements OnInit {

  computerName:string = '';
  constructor(private service:DesktopService) { }

  ngOnInit(): void {
    this.computerName = this.service.getComputerName();
  }

}
