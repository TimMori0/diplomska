import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { DatePipe } from '@angular/common';

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
      MatNativeDateModule,
      MatExpansionModule,
      MatIconModule,
      TextFieldModule,
      MatSelectModule
    ],
    exports: [
      CommonModule,
      MatSliderModule,
      MatInputModule,
      FormsModule,
      MatDatepickerModule,
      MatNativeDateModule,
      BaseLayoutComponent,
      MatExpansionModule,
      MatIconModule,
      TextFieldModule,
      MatSelectModule
    ],
    providers: [DatePipe],
  })
  export class CoreModule {}