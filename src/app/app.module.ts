import { BrowserModule }             from '@angular/platform-browser';
import { HttpModule }                from '@angular/http';
import {NgModule, OnInit}                    from '@angular/core';
import { AppComponent }              from './app.component';
import {TrainingSystemModule}        from "./training-system/training-system.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TrainingSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule{


}
