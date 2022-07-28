import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      MatSliderModule,
      MatInputModule,
      FormsModule
    ],
    exports: [
      CommonModule,
      MatSliderModule,
      MatInputModule,
      FormsModule
    ],
  })
  export class CoreModule {}