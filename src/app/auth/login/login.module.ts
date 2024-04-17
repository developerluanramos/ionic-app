import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";


const routes : Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IonicModule,
        FormsModule
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LoginModule { }
