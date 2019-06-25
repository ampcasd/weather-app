import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { WeatherTileComponent } from './weather-tile.component';
import { DailyForecastModule } from './daily-forecast/daily-forecast.module';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    WeatherTileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DailyForecastModule,
    FlexLayoutModule,
    DropdownModule
  ],
  exports: [
    WeatherTileComponent
  ],
  providers: []
})
export class WeatherTileModule { }
