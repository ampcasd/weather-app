import { City } from '../city-selector/city.interface';

export interface WeatherForecast {
  city: string;
  country: string;
  forecast: WeatherSummary[];
}

export interface WeatherSummary {
  date: Date;
  temp_min: string;
  temp_max: string;
  icon: string;
  description: string;
  wind: Wind;
}

export interface WeatherResponse {
  cod: string;
  message: number;
  cnt: number;
  list: Day[];
  city: City;
}

export interface Day {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
  rain: Rain;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Sys {
  pod: string;
}

export interface Rain {
  '3h': number;
}

export interface Coord {
  lat: number;
  lon: number;
}
