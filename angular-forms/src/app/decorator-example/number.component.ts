import { Component } from "@angular/core";
import { ComplexOuterSubscriber } from "rxjs/internal/innerSubscribe";

@Component({
    selector: 'app-number',
    template: '<b>{{message}}</b>'
})
export class NumberComponent {
    message: string = '';
    count: number = 0;
    increasedByOne() {
        this.count = this.count +1;
        this.message = 'Count increased by one' + this.count
    }
    decreaseByOne() {
        this.count = this.count -1;
        this.message = 'Count decreased by one' + this.count;
    }
}