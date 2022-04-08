import { Component } from "@angular/core";
// import { clearInterval } from "timers";

@Component({
    selector: 'app-stop-watch',
    template: '<h2>{{counter}}</h2>'
})
export class StopWatchComponent {
    shouldRun: boolean = true;
    counter: number =0;
    starts() {
        this.shouldRun = true;
        let interval = setInterval(()=>{
            if(this.shouldRun === false){
                clearInterval(interval);
            }
            this.counter = this.counter + 1;
        }, 1000);
    }
    stopWatch() {
        this.shouldRun = false; 
    }
}