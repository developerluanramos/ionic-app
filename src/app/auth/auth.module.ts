import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {IonicModule} from "@ionic/angular";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from "../core/services/auth.service";
import {LoggingInterceptor} from "../core/interceptors/logging.interceptor";
import {HttpService} from "../core/services/http.service";

const routes : Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthService,
    HttpService,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
    }
  ]
})
export class AuthModule { }
