import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
    ],
    imports: [
      CommonModule,
      MatSliderModule,
      MatInputModule
    ],
    exports: [
      CommonModule,
      MatSliderModule,
      MatInputModule
    ],
  })
  export class CoreModule {}