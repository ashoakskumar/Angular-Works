import { Component, ViewChild } from "@angular/core";
import { NumberComponent } from "./number.component";

@Component({
    selector:'app-number-parent',
    templateUrl: './number-parent.component.html'
})
export class NumberParentComponent {
    @ViewChild(NumberComponent)
    private numberComponent: NumberComponent;
    increase() {
        this.numberComponent.increasedByOne();
    }
    decrease() {
        this.numberComponent.decreaseByOne();   
    }

}