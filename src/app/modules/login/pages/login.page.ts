import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  public loginEmail: string = '';
  public loginPassword: string = '';


  constructor(
    private route: Router,
    private userService: UsersService
  ){}

  SignIn(){
    var users = JSON.parse(localStorage.getItem('users') || '{}');

    if(users.length > 0){
      users.forEach((user: User) => {
        console.log(user);
        if(user.email == this.loginEmail && user.password == this.loginPassword){
          console.log("SUCCES");
          this.userService.setUser(user);
          this.route.navigate(['/home']);
        }
        else{
          console.log("FAIL");
        }
      });
    }
  }

}
