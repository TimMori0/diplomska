import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core-module';
import { GuestNewApplicationRoutingModule } from './guest-new-application-routing.module';
import { GuestNewApplicationPage } from './pages/guest-new-application.page';

@NgModule({
  declarations: [
    GuestNewApplicationPage
  ],
  imports: [
    GuestNewApplicationRoutingModule,
    CoreModule
  ],
  providers: [],
})

export class GuestNewApplicationModule {}
