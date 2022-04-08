import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeatPipe'
})
export class RepeatPipePipe implements PipeTransform {

  transform(word: string, args: number): string {
    let count =1;
    let result = word;
    while(count < args) {
      result = result + ' ' + word;
      count +=1;
    }
    return result;
  }

}
