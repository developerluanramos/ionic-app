import { Component, OnInit } from '@angular/core';
import {AuthInterface} from "../../core/models/auth.interface";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  /*
  * vars
  * */
  public auth: AuthInterface = {
    email: 'luan.developer@gmail.com',
    password: 'Aq!sw2de3',
    token_name: 'app'
  };
  /*
  * construct
  * */
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() { }

  async doLogin() {
    this._authService.doLogin(this.auth);
  }
}
