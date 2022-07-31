import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit{
  public userType: any;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute
  ){}

  SignOut(){
    console.log("SUCCES");
    this.route.navigate(['/login']);
  }
  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => { 
      this.userType = params.get('usertype'); 
    });

    console.log(this.userType);
  }
}
