import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./../modules/login/login.module').then(
        (module) => module.LoginModule
      )
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./../modules/sign-up/sign-up.module').then(
        (module) => module.SignInModule
      )
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./../modules/home/home.module').then(
        (module) => module.HomeModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
