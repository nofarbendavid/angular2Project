import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UsersService} from "../users.service";


@Component({
  selector: 'ts-user-list',
  template: `
<div>
<input type="text" list="users" placeholder="אנא הכנס שם" (change)="userSelect.emit($event.target.value)" />
<!--<datalist id="users" >-->
<!--<option *ngFor="let user of userService._usersList" value={{user}} >-->
<!--</datalist> -->
</div>
`,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
  }

  ngOnInit() {
  }

  @Output()
  public userSelect = new EventEmitter<string>();

}
