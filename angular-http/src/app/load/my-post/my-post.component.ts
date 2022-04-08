import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss']
})
export class MyPostComponent implements OnInit {

  constructor(public viewContainerRef:ViewContainerRef) { }

  ngOnInit(): void {
  }

}
