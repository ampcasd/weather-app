import { City, CityChange } from '../components/city-selector/city.interface';

export interface AppState {

  cities: {
    update: CityChange,
    selectedCities: City[]
  };

  api: {
    key: string;
    callLimit: number;
  };
}
