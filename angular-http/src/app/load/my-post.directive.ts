import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyPost]'
})
export class MyPostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
