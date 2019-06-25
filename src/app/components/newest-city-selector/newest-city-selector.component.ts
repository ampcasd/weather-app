import { Component, OnInit } from '@angular/core';
import { Store, Selector } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { take, first } from 'rxjs/operators';

import { UpdateCities } from 'src/app/actions/city.action';
import { City, CityChange } from '../city-selector/city.interface';

type NameFirstLetter = string;
type NameSecondLetter = string;
type NameThirdLetter = string;

@Component({
  selector: 'newest-city-selector',
  templateUrl: './newest-city-selector.component.html',
  styleUrls: [
    './newest-city-selector.component.scss',
    '../new-city-selector/new-city-selector.component.scss'
  ]
})
export class NewestCitySelectorComponent implements OnInit {

  cities: Map<NameFirstLetter, Map<NameSecondLetter, Map<NameThirdLetter, City[]>>> = new Map();

  searchResults: City[];

  selectedCity: City; // selected city, waiting for confirmation to be dispatched

  constructor(private http: HttpClient, private store: Store) { }

  ngOnInit() {
    this.fetchCities();
  }

  search(event: { query: string }): void {
    const query = event.query.charAt(0).toUpperCase() + event.query.slice(1);

    if (query.length >= 3) {

      const firstLevel = this.cities.get(query[0]);
      const secondLevel = firstLevel.get(query[1]);
      const thirdLevel = secondLevel.get(query[2]);

      this.searchResults = thirdLevel;

      if (event.query.length > 3) {
        this.searchResults = this.searchResults.filter((city: City) => {

          return city.name.startsWith(query);
        });
      }
    } else {
      this.searchResults = [];
    }
  }

  addCity() {
    if (this.selectedCity) {
      this.store.dispatch(new UpdateCities({
        city: this.selectedCity,
        change: 'add'
      } as CityChange));
    }
  }

  /** 
   * @remarks This method pulls the cities from the json file, 
   * and maps City objects to a simplified version.
   */
  private fetchCities() {
    this.http.get<City[]>('./assets/cities.json').pipe(take(1))
      .subscribe((response: City[]) => {
        response.forEach((city: City) => {
          const nestedMap = this.cities.get(city.name[0]) || new Map();
          const deepNestedMap = nestedMap.get(city.name[1]) || new Map();
          const records = deepNestedMap.get(city.name[2]) || [];

          this.cities.set(
            city.name[0],
            nestedMap.set(
              city.name[1],
              deepNestedMap.set(
                city.name[2],
                [...records, {
                  id: city.id,
                  name: city.name
                }]
              )
            ));
        });
      });
    // omitting unsubscribe() as take() unsubscribes
  }

}
