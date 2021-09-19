import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}
  transform(value: string, city: string): any {
    return this.sanitizer.bypassSecurityTrustHtml('SafeValue must use [property]=binding:<div [ngStyle] = "background-color: #ffffcc">City name: ' + city +'</div>(see http://g.co/ng/security#xss)');
  }

}
