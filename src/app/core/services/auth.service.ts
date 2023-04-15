import { Injectable } from '@angular/core';
import {BaseStorageService} from "./base.storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _baseStorageService: BaseStorageService
  ) { }

  isLogged() {
    let authData = this._baseStorageService.getObject("authData");

    if(authData.token) {
      if(this.isAdmin()) {

      }
    }
  }

  isAdmin() {
    return true;
  }

  isAluno() {
    return true;
  }
}
