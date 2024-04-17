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
    email: '',
    password: '',
    device_name: ''
  };
  /*
  * construct
  * */
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() { }

  doLogin() {
    this._authService.doLogin(this.auth).subscribe((response: any) => {
      console.log(response)
    }, (error: any) => {
      console.log(error)
    });
  }
}
