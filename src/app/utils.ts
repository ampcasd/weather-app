import { HttpClient } from '@angular/common/http';
import { City } from './components/city-selector/city.interface';
import { take, map } from 'rxjs/operators';

/** 
 * @remarks This method pulls the cities from the json file, 
 * and maps City objects to a simplified version.
 */
export function fetchCities(http: HttpClient) {
  http.get<City[]>('http://localhost:4200/assets/cities.json').pipe(
    take(1),
    map((response) => {
      this.cities = response.map((city: City) => {
        return {
          id: city.id,
          name: city.name
        };
      });
    })).subscribe(() => this.viewCities = this.cities.slice(0, 50));

  // omitting unsubscribe() as take() unsubscribes, and HttpClient completes the stream on its own

}
