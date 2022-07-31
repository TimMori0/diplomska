import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [
      SidemenuComponent,
      BaseLayoutComponent
    ],
    imports: [
      CommonModule,
      MatSliderModule,
      MatInputModule,
      FormsModule,
      MatDatepickerModule,
      MatNativeDateModule 
    ],
    exports: [
      CommonModule,
      MatSliderModule,
      MatInputModule,
      FormsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      BaseLayoutComponent
    ],
  })
  export class CoreModule {}