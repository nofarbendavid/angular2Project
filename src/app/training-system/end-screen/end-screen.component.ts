import { Component, OnInit } from '@angular/core';
import {calcTime} from '../../../assets/utils/time';


@Component({
  selector: 'ts-end-screen',
  template: `
   <ts-header></ts-header>
   <div class="end-container">
      <div class="main-container">
        <div class="sub-container">
          <div class="main-title">כל הכבוד 
          <span>{{userName}}</span>
          </div>
          <div class="sub-title">סיימת את התרגול, ענית על כל השאלות תוך
            <span class="time"> {{userTotalTime}} </span>
          </div>
          <div class="error-number-message">  מספר תשובות לא נכונות :
          <span [ngClass]="getClass()">{{numberOfTotalErrors}}</span>
         </div>
        </div>
      </div>
  </div>
`,
  styleUrls: ['./end-screen.component.css']
})
export class EndScreenComponent implements OnInit {

  public userTotalTime: string;
  public numberOfTotalErrors : number;
  public userName: string;

  constructor() {

    let localStorageData = JSON.parse(localStorage.getItem("results"));
    let totalTime = 0 ;
    if(localStorageData !== null){
      Object.keys(localStorageData).forEach(item => {
        totalTime += localStorageData[item]
      })
    }

    this.numberOfTotalErrors = JSON.parse(localStorage.getItem("numberOfErrors"));

    if(this.numberOfTotalErrors === null){
      this.numberOfTotalErrors = 0;
    }

    this.userName  = JSON.parse(localStorage.getItem("trainingSystem")).name;


    this.userTotalTime = calcTime(totalTime);
  }

  ngOnInit() {
  }


  getClass(){
    if(this.numberOfTotalErrors === 0){
      return "zero-errors"
    }else {
      return "errors"
    }
  }
}


