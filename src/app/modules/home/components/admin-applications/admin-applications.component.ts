import { Component, Input } from '@angular/core';
import { Application } from 'src/app/core/models/application.model';

@Component({
  selector: 'admin-applications',
  templateUrl: './admin-applications.component.html',
  styleUrls: ['./admin-applications.component.scss'],
})
export class AdminApplicationsComponent {
    @Input('arrayOfApplications') applications: Array<Application> = new Array<Application>();
}
