import { Component, OnInit }          from '@angular/core';
import {clacMinutes, calcSeconds}     from '../../../assets/utils/time';
import { questionsList }              from '../question/questions';

@Component({
  selector: 'ts-waiting-screen',
  template: `
  <div class="waiting-container">
      <ts-header></ts-header>
      <div class="waiting-sub-container">
          <div class="main-title">כל הכבוד 
          <span>{{userName}}</span>
           <span class="waiting-screen-time-title">סיימת לענות על השאלות תוך
              <span>{{minutes}} דקות</span> ו-
              <span>{{seconds}} שניות</span>
           </span>
        </div>
        <div class="waiting-bottom-container">
            <div class="sub-title">המתן לסוף השיעור כדי לעבור לנושא הבא</div>
              <a routerLink="/question"><button class="next-question-btn">שאלה הבאה </button></a>  
        </div>
      </div>
</div>

  `,
  styleUrls: ['./waiting-screen.component.css']
})
export class WaitingScreenComponent implements OnInit {

  public minutes: number;
  public seconds: number;
  public userName: string;

  constructor() {

    let localStorageResults = JSON.parse(localStorage.getItem("results"));
    let lastQuestionsTheme = JSON.parse(localStorage.getItem("questionTheme"));
    let questionTime = 0;


    // hold the questions indexes of the latest theme
    let themeQuestionsIndexes = [];

      Object.keys(questionsList).forEach(questionIndex => {
      if(questionsList[questionIndex].theme === lastQuestionsTheme){
        themeQuestionsIndexes.push(questionIndex)
      }
    });


    // calc the time it took the user to answer the latest theme questions
    themeQuestionsIndexes.map(index => {
      questionTime += localStorageResults[index]
    });


    this.minutes = clacMinutes(questionTime);
    this.seconds = calcSeconds(questionTime);

    this.userName  = JSON.parse(localStorage.getItem("trainingSystem")).name;
  }

  ngOnInit() {
  }

}
