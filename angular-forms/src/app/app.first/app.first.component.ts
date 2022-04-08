import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-app-first',
  templateUrl: './app.first.component.html',
  styleUrls: ['./app.first.component.scss']
})
export class AppFirstComponent implements OnInit {

  public size: number;
  public square: number;
  constructor(private dataService: DataService,private router: Router) {
      this.size = 16;
      this.square = Math.sqrt(this.size);
      dataService.setOption('size',this.size);
      dataService.setOption('square',this.square);
     
   }

  ngOnInit(): void {
    
  }
 send() {
  this.dataService.sendMessage('Message from Home Component to App Component!');
    this.router.navigate(['second']);

 }
}
