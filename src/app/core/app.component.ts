import { Component, OnInit } from '@angular/core';
import { UserTypeEnum } from './enum/user-type.enum';
import { User } from './models/user.model';
import { Vloga } from './models/vloga.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public basic: User = new User('Janez', 'Novak', 'janez.novak@gmail.com', 'basic' , '031333333', UserTypeEnum.Basic);
  public admin: User = new User('Franc', 'Kranjc', 'franc.kranjc@gmail.com', 'admin' , '066895555', UserTypeEnum.Admin);
  public users: Array<User> = new Array<User>();

  public vloge: Array<Vloga> = new Array<Vloga>();

  ngOnInit(){
    this.users.push(this.basic);
    this.users.push(this.admin);

    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('vloge', JSON.stringify(this.vloge));
  }
}
