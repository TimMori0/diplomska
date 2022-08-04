import { Component, Input, OnInit } from '@angular/core';
import { ApplicationStatusEnum } from 'src/app/core/enum/application-status.enum';
import { Application } from 'src/app/core/models/application.model';
import { ApplicationsService } from 'src/app/core/services/applications.service';

@Component({
  selector: 'admin-applications',
  templateUrl: './admin-applications.component.html',
  styleUrls: ['./admin-applications.component.scss'],
})
export class AdminApplicationsComponent implements OnInit{
    @Input('page') page: string = '';
    public applications: Array<Application> = new Array<Application>();
    public filteredApplications: Array<Application> = new Array<Application>();
    public applicationsLength: number = 0;

    constructor(
      private applicationsService: ApplicationsService
    ){
      applicationsService.applications.subscribe((result: Array<Application>) => {
        this.applications = result;
      });
    }

    ngOnInit(){
      console.log('kle12344okej = ', this.page)
      this.ChangeListOfApplications(this.page);
    }

    ChangeListOfApplications(menuPage: string){
      this.filteredApplications = new Array<Application>();

      this.applications.forEach((element: Application) => {
        if(menuPage == 'pending' && element.status == ApplicationStatusEnum.Sent){
          this.filteredApplications.push(element);
        } else if(menuPage == 'in-proces' && element.status == ApplicationStatusEnum.Processing){
          this.filteredApplications.push(element);
        } else if(menuPage == 'confirmed' && element.status == ApplicationStatusEnum.Accepted){
          this.filteredApplications.push(element);
        } else if(menuPage == 'all-application'){
          this.filteredApplications.push(element);
        }
      });
      
      this.applicationsLength = this.filteredApplications.length;
    }
}
