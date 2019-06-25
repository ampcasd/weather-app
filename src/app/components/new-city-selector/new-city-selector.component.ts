import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

import { City, CityChange } from '../city-selector/city.interface';
import { UpdateCities } from 'src/app/actions/city.action';

@Component({
  selector: 'new-city-selector',
  templateUrl: './new-city-selector.component.html',
  styleUrls: ['./new-city-selector.component.scss']
})
export class NewCitySelectorComponent implements OnInit {

  public cities: City[];

  public selectedCity: City; // selected city, waiting for confirmation to be dispatched

  constructor(private http: HttpClient, private store: Store) { }

  ngOnInit() {
    this.fetchCities();
  }

  public addCity() {
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
        this.cities = response.map((city: City) => {
          return {
            id: city.id,
            name: city.name
          };
        });
      });
    // omitting unsubscribe() as take() unsubscribes
  }

}

