import { CityChange } from '../components/city-selector/city.interface';

export class UpdateApi {
  static readonly type = '[Api] Key';

  constructor(public key: string) { }
}

export class DecreaseLimit {
  static readonly type = '[Api] Limit';

  constructor(public tap: {}) { }
}
