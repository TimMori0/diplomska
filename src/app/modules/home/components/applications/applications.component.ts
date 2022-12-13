import { Component } from '@angular/core';
import { ApplicationStatusEnum } from 'src/app/core/enum/application-status.enum';
import { Application } from 'src/app/core/models/application.model';
import { User } from 'src/app/core/models/user.model';
import { ApplicationsService } from 'src/app/core/services/applications.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent {
    public applications: Array<Application> = new Array<Application>();
    public tmp: Array<Application> = new Array<Application>();
    public user: User = new User();

    constructor(
        private applicationsService: ApplicationsService,
        private userService: UsersService
    ){
        applicationsService.applications.subscribe((result: Array<Application>) => {
            console.log(result);
            this.tmp = result;
        });

        userService.user.subscribe((result: User) => {
            this.user = result;
        });

        this.tmp.forEach((app: Application) => {
            console.log(app.email, this.user.email, "TULEELELELE")
            if(app.email == this.user.email)
            {
                this.applications.push(app);
            }
        });
    }

    deleteApplication(id: number){
        this.applications.forEach((item, index)=>{
            if(item.id == id)
            {
                this.applications.splice(index, 1);
            }
        });
        this.applicationsService.saveApplications(this.applications);
    }

    saveAndSendApplication(){
        
    }

    acceptApplication(application: Application){
        application.status = ApplicationStatusEnum.Accepted;

        this.applicationsService.updateApplication(application);
    }

    declineApplication(application: Application){
        application.status = ApplicationStatusEnum.Declined;

        this.applicationsService.updateApplication(application);
    }
}
