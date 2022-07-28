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
    path: 'form',
    loadChildren: () =>
      import('./../modules/purchasing-form/purchasing-form.module').then(
        (module) => module.PurchasingFormModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
