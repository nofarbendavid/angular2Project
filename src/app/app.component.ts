import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ts-root',
  template: `
 <ts-training-system></ts-training-system>
  `,
  styles: []
})
export class AppComponent implements OnInit{

  ngOnInit(){
    //localStorage.clear();
  }


}
