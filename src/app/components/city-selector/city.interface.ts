import { Coord } from '../../weather-dashboard/weather.interface';

export interface City {
  id: number;
  code?: number;
  name?: string;
  country?: string;
  coord?: Coord;
  timezone?: number;
}

export interface CityChange {
  city: City;
  change: 'add' | 'delete';
}
