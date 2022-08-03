import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core-module';
import { AdminApplicationsComponent } from './components/admin-applications/admin-applications.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { NewApplicationsComponent } from './components/new-application/new-application.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './pages/home.page';

@NgModule({
  declarations: [
    HomePage,
    ApplicationsComponent,
    NewApplicationsComponent,
    AdminApplicationsComponent
  ],
  imports: [
    HomeRoutingModule,
    CoreModule
  ],
  providers: [],
})

export class HomeModule {}
