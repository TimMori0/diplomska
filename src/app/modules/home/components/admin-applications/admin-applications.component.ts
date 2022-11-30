import { Component, Input, OnInit } from '@angular/core';
import { ApplicationStatusEnum } from 'src/app/core/enum/application-status.enum';
import { Application } from 'src/app/core/models/application.model';
import { ApplicationsService } from 'src/app/core/services/applications.service';
import { MenuService } from 'src/app/core/services/menu.service';

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

    public vehicle: string = '';
    public price: number = 0;
    public discount: number = 0;

    constructor(
      private applicationsService: ApplicationsService,
      private menuService: MenuService
    ){
      applicationsService.applications.subscribe((result: Array<Application>) => {
        this.applications = result;
      });
    }

    ngOnInit(){
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

    saveAndSave(application: Application){
      application.vehicle = this.vehicle;
      application.price = this.price;
      application.discount = this.discount;
      application.status = ApplicationStatusEnum.Processing;

      this.applicationsService.updateApplication(application);

      this.menuService.setMenuPage('in-proces');
    }
}
