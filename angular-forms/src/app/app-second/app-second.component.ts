import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-app-second',
  templateUrl: './app-second.component.html',
  styleUrls: ['./app-second.component.scss']
})
export class AppSecondComponent implements OnInit {
  public data;
  subscription: Subscription;
  constructor(private dataService: DataService) { 
    debugger;
    this.data = dataService.getOption();
  
  }

  ngOnInit(): void {
    this.subscription = this.dataService.getMessage().subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
