import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core-module';
import { SignUpPage } from './pages/sign-up.page';
import { SignUpRoutingModule } from './sign-up-routing.module';


@NgModule({
  declarations: [
    SignUpPage
  ],
  imports: [
    SignUpRoutingModule,
    CoreModule
  ],
  providers: [],
})

export class SignInModule {}
