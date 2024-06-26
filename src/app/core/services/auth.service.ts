import {Injectable} from '@angular/core';
import {BaseStorageService} from "./base.storage.service";
import {Router} from "@angular/router";
import {AuthInterface} from "../models/auth.interface";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _navigate : Router,
    private _baseStorageService: BaseStorageService,
    private _httpService: HttpService
  ) { }

  isLogged() {
    let authData = this._baseStorageService.getObject("authData");
    if(authData.token) {
      if(this.isAdmin(authData)) {
        this._navigate.navigate(["admin"]);
      } else if (this.isAluno(authData)) {
        this._navigate.navigate(["aluno"]);
      }
    }
    return false;
  }

  isAdmin(authData : any) {
    return !!authData.isAdmin;
  }

  isAluno(authData : any) {
    return !!authData.isAluno;
  }

  doLogin(authData: AuthInterface)  {
    return this._httpService.post('auth/token', authData);
  }
}
