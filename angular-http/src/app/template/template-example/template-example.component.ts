import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.scss']
})
export class TemplateExampleComponent implements OnInit {

  num = 52;
  bookContext = {bookName: 'life',writer: 'Ashok', $implicit:'Chennai'};

  allUser = [{userId:101,name:'Mahesh'},{userId:102,name:'kumar'},{userId:103,name:'Ashok'}];

  toggleFlag1 = true;
  toggleFlag2 = true;
  toggleFlag3 = true;

  myDir='';
  msg = 'world should unite';

  //ng-container
  isMsgShow = true;

  users = [{userId:'101',name:'ashok',isActive:true},
{userId:102,name:'kumar',isActive:true},{userId:103,name:'jaya',isActive:true}];

userId=101;

// bookContext = {name:'Ramayana',writer:'kambar'};
  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(allUser:any): number {
    return allUser.userId;
  }

  onToggle1() {
    this.toggleFlag1 = (this.toggleFlag1 )? false :  true;
  }
  onToggle2() {
    this.toggleFlag2 = this.toggleFlag2 ? false :  true;
  }
  onToggle3() {
    this.toggleFlag3 = this.toggleFlag3 ? false :  true;
  }
}
