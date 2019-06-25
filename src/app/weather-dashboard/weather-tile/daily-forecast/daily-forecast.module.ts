import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DailyForecastComponent } from './daily-forecast.component';

@NgModule({
  declarations: [
    DailyForecastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DailyForecastComponent
  ],
  providers: []
})
export class DailyForecastModule { }
