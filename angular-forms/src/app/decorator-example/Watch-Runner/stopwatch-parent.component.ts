import { Component, ViewChild } from "@angular/core";
import { StopWatchComponent } from "./stopwatch.component";

    @Component({
        selector:'app-stop-watch-parent',
        templateUrl: 'stopwatch-parent.component.html'
    })
    export class StopWatchParentComponent {
        @ViewChild(StopWatchComponent)
        private stopWatch: StopWatchComponent;

        startWatch() {
            this.stopWatch.starts();
        }
        stop() {
            this.stopWatch.stopWatch();
        }
    }