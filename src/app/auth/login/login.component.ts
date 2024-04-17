import { Component, OnInit } from '@angular/core';
import {AuthInterface} from "../../core/models/auth.interface";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  public auth: AuthInterface = {
    email: '',
    password: '',
    device_name: ''
  };
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {}

  doLogin() {
    this._authService.doLogin(this.auth);
  }
}
