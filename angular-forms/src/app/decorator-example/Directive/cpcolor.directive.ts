import { AfterViewInit, Component, Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[cpColor]'  
})
export class CpColorDirective implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}
    ngAfterViewInit() {
        this.elementRef.nativeElement.style.color='red';    
    }
    changed(changeColor:string) {
    this.elementRef.nativeElement.style.color= changeColor
    }
}