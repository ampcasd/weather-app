import { Component, Input, Output, EventEmitter } from '@angular/core';

import { WeatherForecast } from '../weather.interface';
import { SelectItem } from 'primeng/components/common/selectitem';

export enum WeatherCondition {
  'heat' = 'Heat',
  'wind' = 'Wind'
}

@Component({
  selector: 'weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.scss'],
})
export class WeatherTileComponent {
  readonly weatherConditions: SelectItem[] = Object.keys(WeatherCondition).map(key => {
    return { label: WeatherCondition[key], value: WeatherCondition[key] };
  });

  selectedCondition: WeatherCondition = WeatherCondition.heat;

  @Input() forecast: WeatherForecast;

  @Output() removeCity = new EventEmitter();

}
