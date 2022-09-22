import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestNewApplicationPage } from './pages/guest-new-application.page';

const routes: Routes = [
  { 
    path: '', 
    component: GuestNewApplicationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestNewApplicationRoutingModule { }