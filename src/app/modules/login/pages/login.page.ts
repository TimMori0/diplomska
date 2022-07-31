import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  public loginEmail: string = '';
  public loginPassword: string = '';


  constructor(
    private route: Router
  ){}

  SignIn(){
    var users = JSON.parse(localStorage.getItem('users') || '{}');

    if(users.length > 0){
      users.forEach((user: User) => {
        console.log(user);
        if(user.email == this.loginEmail && user.password == this.loginPassword){
          console.log("SUCCES");
          this.route.navigate(['/home', user.type]);
        }
        else{
          console.log("FAIL");
        }
      });
    }
  }

}
