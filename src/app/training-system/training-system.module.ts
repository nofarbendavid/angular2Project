import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import { TrainingSystemComponent } from './training-system.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersService} from "./users.service";
import { TimeCounterComponent } from './time-counter/time-counter.component';
import { TimeCountUpPipe } from './time-counter/time-count-up.pipe';
import {QuestionComponent} from "./question/question.component";
import { LoginComponent } from './login/login.component';
import { WaitingScreenComponent } from './waiting-screen/waiting-screen.component';
import { EndScreenComponent } from './end-screen/end-screen.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'question', component: QuestionComponent},
      {path: 'waiting', component: WaitingScreenComponent},
      {path: 'end', component:EndScreenComponent}
    ]),
  ],
  declarations: [HeaderComponent, TrainingSystemComponent, UserListComponent, TimeCounterComponent, TimeCountUpPipe, QuestionComponent, LoginComponent, WaitingScreenComponent, EndScreenComponent],
  providers: [UsersService],
  exports: [TrainingSystemComponent]
})
export class TrainingSystemModule { }
