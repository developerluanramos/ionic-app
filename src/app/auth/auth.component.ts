import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent  implements OnInit {
  loading: boolean = true;
  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit() {
    this._authService.isLogged();

    setTimeout(() => {
      this.loading = false;
    }, 1000) 
  }

}
