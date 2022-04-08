import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MyPostDirective } from '../my-post.directive';
import { MyPostService } from '../my-post.service';
import { MyPostComponent } from '../my-post/my-post.component';
import { PostItem } from '../post-item';

@Component({
  selector: 'app-my-post-banner',
  templateUrl: './my-post-banner.component.html',
  styleUrls: ['./my-post-banner.component.scss']
})
export class MyPostBannerComponent implements AfterViewInit,OnDestroy {

  @ViewChild(MyPostDirective)
  private myPostDirective  = {} as MyPostDirective;

  @ViewChild(MyPostComponent)
  private myPostComponent = {} as MyPostComponent

  postItems:PostItem[] = [];
  intervalId:any;
  postIndex: number = -1;
  constructor(private postService: MyPostService) { }

  ngAfterViewInit(): void {
    this.postItems = this.postService.getAllPosts();
    this.startPostHighlights();

  }
  startPostHighlights() {
    this.intervalId = setInterval(()=>{
      this.postIndex = (this.postIndex === this.postItems.length) ? 0 : this.postIndex +1;
      this.postService.loadComponent(this.myPostDirective.viewContainerRef,this.postItems[this.postIndex]);
      this.postService.loadComponent(this.myPostComponent.viewContainerRef,this.postItems[this.postIndex]);
    },2000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
