import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

@Component({
  selector: 'ts-login',
  template: `
  <div class="login-container">
      <ts-header></ts-header>
      <div class="login-sub-container">
        <ts-user-list (userSelect)="setCurrentUser($event)"></ts-user-list>
        <button class="btn-start"  (click)="startGame($event)">התחל</button>     
      </div>
  </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public currentUser: string;
  public moveToQuestions: boolean;


  constructor(private router: Router) {
  }


  startGame(event){
    if(this.currentUser !== undefined){
      this.moveToQuestions = true; //TODO: see if the vae is still necessary

      let localStorageData = {name: this.currentUser};
      localStorage.setItem('trainingSystem', JSON.stringify(localStorageData));

      this.router.navigateByUrl('/question');

    }

  }


  setCurrentUser(value){
    this.currentUser = value;
  }

  ngOnInit() {
  }

}
