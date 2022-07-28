import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core-module';
import { PurchasingFormPage } from './pages/purchasing-form.page';
import { PurchasingFormRoutingModule } from './purchasing-form-routing.module';


@NgModule({
  declarations: [
    PurchasingFormPage
  ],
  imports: [
    PurchasingFormRoutingModule,
    CoreModule
  ],
  providers: [],
})

export class PurchasingFormModule {}
