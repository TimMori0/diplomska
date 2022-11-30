import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { MenuService } from '../../services/menu.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit{
  public userType: any;
  public menuPage: string = '';

  constructor(
    private route: Router,
    private menuService: MenuService
  ){
  }

  ChangeContent(page: string){
    this.menuService.setMenuPage(page);
  }

  SignOut(){
    console.log("SUCCES");
    this.route.navigate(['/login']);
  }
  
  ngOnInit(){
    var user = JSON.parse(localStorage.getItem('lastLoggedUser') || '{}');
    this.userType = user.type;
  }
}
