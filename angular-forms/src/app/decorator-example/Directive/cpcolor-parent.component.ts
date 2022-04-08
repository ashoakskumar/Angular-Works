import { Component, ViewChild } from "@angular/core";
import { CpColorDirective } from "./cpcolor.directive";

@Component({
    selector:'app-cpcolor-parent',
    templateUrl:'./cpcolor-parent.component.html'
})
export class CpColorParentComponent{
    @ViewChild(CpColorDirective)
    private cpColor: CpColorDirective;

    changeColor(color:string) {
        this.cpColor.changed(color);
    }
}