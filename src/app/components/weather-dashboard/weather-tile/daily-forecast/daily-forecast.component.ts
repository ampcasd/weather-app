import { Component, OnInit, Input } from '@angular/core';

import { WeatherSummary } from '../../weather.interface';
import { WeatherCondition } from '../weather-tile.component';

@Component({
  selector: 'daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent implements OnInit {
  readonly conditions = WeatherCondition;

  @Input() day: WeatherSummary;
  @Input() condition: WeatherCondition;

  constructor() { }

  ngOnInit() {
  }

}
