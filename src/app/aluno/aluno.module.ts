import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AlunoComponent} from "./aluno.component";
import {IonicModule} from "@ionic/angular";


const routes : Routes = [
  {
    path: '',
    component: AlunoComponent,
  }
];
@NgModule({
  declarations: [
    AlunoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AlunoModule { }
