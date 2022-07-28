import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasingFormPage } from './pages/purchasing-form.page';


const routes: Routes = [
  { 
    path: '', 
    component: PurchasingFormPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingFormRoutingModule { }