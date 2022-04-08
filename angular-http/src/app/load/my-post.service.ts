import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { MyPost } from './my-post';
import { PostItem } from './post-item';
import { TechnologyComponent } from './technology/technology.component';

@Injectable({
  providedIn: 'root'
})
export class MyPostService {

  constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

  loadComponent(viewContainerRef: ViewContainerRef, postItem: PostItem){
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(postItem.component);
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    let myPost: MyPost = <MyPost>componentRef.instance;
    myPost.post =postItem.data;
  }

  getAllPosts() {
    return [
      new PostItem(TechnologyComponent,{name: 'Angular 10', description: 'Angular is a platform that makes it easy to build applications with the web.'}),
      new PostItem(TechnologyComponent,{name: 'Spring Boot', description: 'Spring Boot makes it easy to create stand-alone, production-grade applications.'}),
      new PostItem(ArticleComponent,{sn:'1', title:'Angular 2 Routing and Navigation Example',category:'Angular 12'}),
      new PostItem(ArticleComponent, {SN:'2', title:'Angular 2 Template Reference Variable Example', category:'Angular 12'}),
      new PostItem(ArticleComponent, {sn:'3',title:'Spring Boot Custom Banner Example',category:'Spring Boot'}),
      new PostItem(ArticleComponent,{sn:'4',title:'Spring Boot Change Default Server Port',category:'Spring boot' })
    ];
  }
}
