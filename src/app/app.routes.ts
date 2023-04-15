import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno.module').then((m) => m.AlunoModule),
  }
];
