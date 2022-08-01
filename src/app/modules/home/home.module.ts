import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core-module';
import { ApplicationsComponent } from './components/applications/applications.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home.page';

@NgModule({
  declarations: [
    HomePage,
    ApplicationsComponent
  ],
  imports: [
    HomeRoutingModule,
    CoreModule
  ],
  providers: [],
})

export class HomeModule {}
