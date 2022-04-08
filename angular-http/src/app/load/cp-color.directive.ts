import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCpColor]'
})
export class CpColorDirective implements AfterViewInit{

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.color = 'red';
  }

  changeColor(changedColor: string) {
    this.elementRef.nativeElement.style.color = changedColor;
  }
}
