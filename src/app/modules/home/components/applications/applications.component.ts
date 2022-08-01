import { Component } from '@angular/core';
import { Application } from 'src/app/core/models/application.model';
import { ApplicationsService } from 'src/app/core/services/applications.service';

@Component({
  selector: 'applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent {
    public applications: Array<Application> = new Array<Application>();

    constructor(
        private applicationsService: ApplicationsService
    ){
        applicationsService.applications.subscribe((result: Array<Application>) => {
            this.applications = result;
        });

        console.log(this.applications)
    }
}
