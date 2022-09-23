import { Component } from '@angular/core';
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
    public user: User = new User();

    constructor(
        private applicationsService: ApplicationsService,
        private userService: UsersService
    ){
        applicationsService.applications.subscribe((result: Array<Application>) => {
            console.log(result);
            this.applications = result;
        });

        userService.user.subscribe((result: User) => {
            this.user = result;
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
}
