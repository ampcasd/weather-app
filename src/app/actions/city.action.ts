import { CityChange } from '../components/city-selector/city.interface';

export class UpdateCities {
  static readonly type = '[City] Track';

  constructor(public update: CityChange) { }
}
