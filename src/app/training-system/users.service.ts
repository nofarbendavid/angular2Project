import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  private _usersList: string[];


  constructor() {
    this._usersList = ['אלון','בת חן','ליאת','רונן','שחר']
  }


  get users(): string[] {
    return this._usersList;
  }
}
