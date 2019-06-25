import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherDashboardComponent } from './weather-dashboard.component';
import { WeatherTileModule } from './weather-tile/weather-tile.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WeatherDashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    WeatherTileModule
  ],
  exports: [
    WeatherDashboardComponent
  ],
  providers: []
})
export class WeatherDashboardModule { }
