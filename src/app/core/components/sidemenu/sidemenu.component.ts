import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit{
  public userType: any;

  constructor(
    private route: Router,
    private usersService: UsersService
  ){
    usersService.user.subscribe((result: User) => {
      this.userType = result.type;
  });
  }

  SignOut(){
    console.log("SUCCES");
    this.route.navigate(['/login']);
  }
  
  ngOnInit(){
    console.log(this.userType);
  }
}
