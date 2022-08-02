import { Component } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  public menuPage: string = "";

  constructor(
    private menuService: MenuService
  ){
    menuService.menu.subscribe((result: string) => {
      this.menuPage = result;
    });
  }
}
