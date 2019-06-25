import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of, Subscription } from 'rxjs';

import { CityChange } from '../components/city-selector/city.interface';
import { AppState } from '../state/app-state.interface';
import { WeatherService } from '../services/weather.service';
import { WeatherResponse, Day, WeatherSummary, WeatherForecast } from './weather.interface';
import { DecreaseLimit } from '../actions/api.action';
import { UpdateCities } from '../actions/city.action';

type CityId = number;

@Component({
  selector: 'weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.scss'],
})
export class WeatherDashboardComponent implements OnInit, OnDestroy {

  cityChange: Observable<CityChange>;

  cityWeather: Map<CityId, WeatherForecast> = new Map();

  private storeSubscription: Subscription;
  private weatherAPISubscription: Subscription;

  constructor(
    private weatherService: WeatherService,
    private store: Store
  ) { }

  ngOnInit() {

    this.cityWeather.set(1, {
      city: 'string',
      country: 'string',
      forecast: [{
        date: new Date(1561636800 * 1000),
        temp_min: '2',
        temp_max: '3',
        icon: '01d',
        description: 'windy',
        wind: {
          speed: 200,
          deg: 180
        }
      }, {
        date: new Date(1561636800 * 1000),
        temp_min: '2',
        temp_max: '3',
        icon: '01d',
        description: 'windy',
        wind: {
          speed: 200,
          deg: 180
        }
      }, {
        date: new Date(1561636800 * 1000),
        temp_min: '2',
        temp_max: '3',
        icon: '01d',
        description: 'windy',
        wind: {
          speed: 200,
          deg: 180
        }
      }, {
        date: new Date(1561636800 * 1000),
        temp_min: '2',
        temp_max: '3',
        icon: '01d',
        description: 'windy',
        wind: {
          speed: 200,
          deg: 180
        }
      }, {
        date: new Date(1561636800 * 1000),
        temp_min: '2',
        temp_max: '3',
        icon: '01d',
        description: 'windy',
        wind: {
          speed: 200,
          deg: 180
        }
      }]
    });

    this.storeSubscription = this.store.select((state: AppState) => state)
      .subscribe((state: AppState) => {

        const cityChange = state.cities.update;

        if (cityChange && !this.cityWeather.has(cityChange.city.id)) {
          this.pullWeatherForecast(cityChange.city.id, state.api.key);
        }

        if (cityChange && cityChange.change === 'delete') {
          this.cityWeather.delete(cityChange.city.id);
        }

      });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
    if (this.weatherAPISubscription instanceof Subscription) {
      this.weatherAPISubscription.unsubscribe();
    }
  }

  pullWeatherForecast(cityId: number, apiKey: string) {
    if (this.weatherAPISubscription) {
      this.weatherAPISubscription.unsubscribe();
      this.weatherAPISubscription = undefined;
    }

    this.weatherAPISubscription = this.weatherService.getForecast(cityId, apiKey)
      .subscribe((response: WeatherResponse) => {

        const weather: WeatherForecast = {
          city: response.city.name,
          country: response.city.country,
          forecast: response.list
            .filter((day: Day) => {
              const date = new Date(day.dt * 1000);
              return date.getHours() === 14;        // get only forecasts for 2:00pm
            })
            .map((day: Day) => {

              const summary: WeatherSummary = {
                date: new Date(day.dt * 1000),
                temp_min: day.main.temp_min.toFixed(0),
                temp_max: day.main.temp_max.toFixed(0),
                icon: day.weather[0].icon,
                description: day.weather[0].description,
                wind: day.wind
              };
              return summary;
            })
        };

        this.cityWeather.set(cityId, weather);

        this.store.dispatch(new DecreaseLimit({}));
      });
  }

  removeCity(cityId: number) {
    this.store.dispatch(new UpdateCities({
      city: { id: cityId },
      change: 'delete'
    } as CityChange));
  }

}
