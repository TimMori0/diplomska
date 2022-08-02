import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core-module';
import { ApplicationsComponent } from './components/applications/applications.component';
import { NewApplicationsComponent } from './components/new-application/new-application.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home.page';

@NgModule({
  declarations: [
    HomePage,
    ApplicationsComponent,
    NewApplicationsComponent
  ],
  imports: [
    HomeRoutingModule,
    CoreModule
  ],
  providers: [],
})

export class HomeModule {}
