import { Component, OnInit } from '@angular/core';
import { ApplicationStatusEnum } from './enum/application-status.enum';
import { UserTypeEnum } from './enum/user-type.enum';
import { Application } from './models/application.model';
import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public lastLoggedUser: User = new User();
  public basic: User = new User(1,'Janez', 'Novak', 'janez.novak@gmail.com', 'basic' , '031333333', UserTypeEnum.Basic);
  public admin: User = new User(2,'Franc', 'Kranjc', 'franc.kranjc@gmail.com', 'admin' , '066895555', UserTypeEnum.Admin);
  public application1: Application = new Application(1, 'Janez', 'Novak', 'janez.novak@gmail.com', '031333333', 17, "13.11.2022", "Muta-Vuzenica", "Grd si matic", ApplicationStatusEnum.Sent);
  public application2: Application = new Application(2, 'Janez', 'Novak', 'janez.novak@gmail.com', '031333333', 7, "20.9.2022", "Maribor-Graz", "Eva ni lepa", ApplicationStatusEnum.Sent);
  public application3: Application = new Application(3, 'Janez', 'Novak', 'janez.novak@gmail.com', '031333333', 2, "25.12.2022", "Vuzenica-Benetke", "Tim je najlepši", ApplicationStatusEnum.Sent);

  public users: Array<User> = new Array<User>();
  public applications: Array<Application> = new Array<Application>();

  constructor(
    private userService: UsersService
  ){

  }

  ngOnInit(){
    this.users.push(this.basic);
    this.users.push(this.admin);

    this.applications.push(this.application1);
    this.applications.push(this.application2);
    this.applications.push(this.application3);

    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('applications', JSON.stringify(this.applications));

    this.lastLoggedUser = JSON.parse(localStorage.getItem('lastLoggedUser') || '{}');
    this.userService.setUser(this.lastLoggedUser);
  }
}