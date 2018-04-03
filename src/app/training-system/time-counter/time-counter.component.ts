import { Component } from '@angular/core';

@Component({
  selector: 'ts-time-counter',
  template: `
 <div class="timer">{{count | timeCountUp}}</div>
  `,
  styleUrls: ['./time-counter.component.css']
})
export class TimeCounterComponent {

  public count: number;
  public stopCounting: boolean;

  constructor() {
    this.count = 0;
    this.countUp();

  }

  public countUp(){
    this.count ++;
    if(!this.stopCounting){
      setTimeout(()=> this.countUp(), 1000);
    }
  }


  ngOnDestroy(){
    let localStorageData = JSON.parse(localStorage.getItem("results")) || {};

    localStorageData[JSON.parse(localStorage.getItem("questionIndex")) - 1 || 0] = this.count ;
    localStorage.setItem('results', JSON.stringify(localStorageData));
  }

}
