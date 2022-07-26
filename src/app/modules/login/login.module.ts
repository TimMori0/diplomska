import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core-module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './pages/login.page';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    LoginRoutingModule,
    CoreModule
  ],
  providers: [],
})

export class LoginModule {}
