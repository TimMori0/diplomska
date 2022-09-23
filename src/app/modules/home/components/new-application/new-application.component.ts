import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationStatusEnum } from 'src/app/core/enum/application-status.enum';
import { Application } from 'src/app/core/models/application.model';
import { User } from 'src/app/core/models/user.model';
import { ApplicationsService } from 'src/app/core/services/applications.service';
import { MenuService } from 'src/app/core/services/menu.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.scss'],
})

export class NewApplicationsComponent {
  public autoResize: boolean = true;
  public numberOfPassangers: number = 0;
  public startDate: string = '';
  public endDate: string = '';
  public travelRoute: string = '';
  public description: string = '';
  public typeOfTransport: string = '';

  public user: User = new User();
  public applications: Array<Application> = new Array<Application>();
  public application: Application = new Application();

  constructor(
    private userService: UsersService,
    private applicationService: ApplicationsService,
    private menuService: MenuService,
    private route: Router,
    private datePipe: DatePipe
  ){
    userService.user.subscribe((result: User) => {
      this.user = result;
    });

    applicationService.applications.subscribe((result: Array<Application>) => {
      this.applications = result;
    });
  }

  addApplication(){
    console.log(this.user);
    this.application = new Application(this.applications.length + 1, this.user.firstname, this.user.lastname, this.user.email, this.user.phonenumber,
      this.numberOfPassangers, this.datePipe.transform(this.startDate, 'dd-MM-yyyy') || '', this.datePipe.transform(this.endDate, 'dd-MM-yyyy') || '', this.travelRoute, this.description, ApplicationStatusEnum.Sent);

    this.applicationService.addApplication(this.application);

    this.menuService.setMenuPage("applications");
  }

  cancelApplication(){
    this.menuService.setMenuPage("applications");
  }
}
