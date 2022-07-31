import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core-module';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home.page';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    HomeRoutingModule,
    CoreModule
  ],
  providers: [],
})

export class HomeModule {}
