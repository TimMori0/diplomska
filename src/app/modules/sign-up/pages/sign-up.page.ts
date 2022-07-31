import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeEnum } from 'src/app/core/enum/user-type.enum';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage {
  public firstName: string = '';
  public lastName: string = '';
  public email: string = '';
  public phoneNumber: string = '';
  public password: string = '';
  public password2: string = '';

  public newUser: User = new User();

  constructor(
    private route: Router
  ){}

  SignUp(){
    if(this.password == this.password2){
      this.newUser.fisrtname = this.firstName;
      this.newUser.lastname = this.lastName;
      this.newUser.email = this.email;
      this.newUser.phonenumber = this.phoneNumber;
      this.newUser.password = this.password;
      this.newUser.type = UserTypeEnum.Basic;

      var users = JSON.parse(localStorage.getItem('users') || '{}');
      users.push(this.newUser);

      localStorage.setItem('users', JSON.stringify(users));

      this.route.navigate(['/home', this.newUser.type]);
      console.log("SUCCES");
    }
    else{
      console.log("FAIL");
    }
  }
}
