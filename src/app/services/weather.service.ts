import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { WeatherResponse } from '../components/weather-dashboard/weather.interface';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getForecast(
    cityId: number,
    apiKey: string,
    units = 'metric',
    language = 'pl'
  ) {

    const parsedUrl = `
    https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}&units=${units}&lang=${language}
    `;

    return this.http.get<WeatherResponse>(parsedUrl);
  }
}
