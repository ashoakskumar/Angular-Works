import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { WriterComponent } from '../writer/writer.component';

@Component({
  selector: 'app-viewchildrendemo',
  templateUrl: './viewchildrendemo.component.html',
  styleUrls: ['./viewchildrendemo.component.scss']
})
export class ViewchildrendemoComponent implements OnInit,AfterViewInit {

  @ViewChildren(WriterComponent)
  writer = {} as QueryList<WriterComponent>;
  allWritersVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.writer.changes.subscribe(list => {
      list.forEach((element:any) => {
          console.log(element.writerName + '-' +element.bookName);
      });
    })
  }

  onShowAllWriters() {
		this.allWritersVisible = (this.allWritersVisible === true) ? false : true;
	}
}
