import { Component }          from '@angular/core';
import { questionsList }      from './questions';
import { Router }             from '@angular/router';

@Component({
  selector: 'ts-question',
  template: `
  <div class="question-container">
      <ts-header></ts-header>
      <div class="question-sub-container">
          <ts-time-counter></ts-time-counter>
          <div class="theme">{{questionTheme  | uppercase }}</div>
          <div class="question" [innerHTML]="question"></div>
          <ul class="answers-container">
              <li class="answer" [ngClass]="getClass(answers.indexOf(ans))" (click)="answerSelect(answers.indexOf(ans))" *ngFor="let ans of answers">{{ans}}</li>
          </ul>
      </div>
  </div>

`,
  styleUrls: ['question.component.css']
})
export class QuestionComponent{

  public currentQuestionIndex: number;
  public question: string;
  public answers : any[];
  public currectAnswerIndex: number;
  public userSelectAnswerIndex: number;
  public  questionTheme: string;

  constructor(private router: Router) {

    this.currentQuestionIndex =  JSON.parse(localStorage.getItem("questionIndex")) || 0;

    this.question = questionsList[this.currentQuestionIndex].question;
    this.answers = questionsList[this.currentQuestionIndex].answers;
    this.currectAnswerIndex = questionsList[this.currentQuestionIndex].currectAnswerIndex;
    this.questionTheme = questionsList[this.currentQuestionIndex].theme;

    localStorage.setItem('questionTheme', JSON.stringify(this.questionTheme));
  }


  ngOnInit() {
  }


  getClass(index){
    if(this.userSelectAnswerIndex!== undefined && index === this.currectAnswerIndex && index === this.userSelectAnswerIndex){
      return "green"
    }else if(this.userSelectAnswerIndex!== undefined && index !== this.currectAnswerIndex &&  index === this.userSelectAnswerIndex){
      return "red"
    }
  }


  public answerSelect(index) {
    this.userSelectAnswerIndex = index;

    if (index === this.currectAnswerIndex) {

      let localStorageData = this.currentQuestionIndex + 1;
      localStorage.setItem('questionIndex', JSON.stringify(localStorageData));

      if (this.currentQuestionIndex + 1 < Object.keys(questionsList).length) {
        if (this.questionTheme === questionsList[localStorageData].theme) {

          setTimeout(() => {
            this.router.navigateByUrl(``).then(
              () => {
                this.router.navigateByUrl('/question');
              });

          }, 1000);
        } else {
          setTimeout(() => this.router.navigateByUrl('/waiting'), 1000);
        }

      } else if (this.currentQuestionIndex + 1 === Object.keys(questionsList).length) {
        setTimeout(() => this.router.navigateByUrl('/end'), 1000);
      }
    } else {

      let localStorageData = JSON.parse(localStorage.getItem("numberOfErrors"));
      if (localStorageData === null) {
        localStorageData = 1;
      } else {
        localStorageData++
      }
      localStorage.setItem('numberOfErrors', JSON.stringify(localStorageData));
    }
  }

}



