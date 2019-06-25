import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSelectChange } from '@angular/material/select';
import { Store } from '@ngxs/store';
import { map, take } from 'rxjs/operators';

import { City, CityChange } from './city.interface';
import { UpdateCities } from '../../actions/city.action';

export enum SelectorVersion {
  'one' = '1.0',
  'two' = '2.0',
  'three' = '3.0'
}

@Component({
  selector: 'city-selector',
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitySelectorComponent {

  public cities: City[]; // this array gets filled at once as Http.get on JSON isn't a real stream
  public viewCities: City[] = []; // this array gets filled gradually

  public citySelection: MatSelectChange; // selected city, waiting for confirmation to be dispatched

  private intervalId: number;

  constructor(private http: HttpClient, private store: Store, private ref: ChangeDetectorRef) {
    this.fetchCities();
  }

  public addCity() {
    if (this.citySelection) {
      this.store.dispatch(new UpdateCities({
        city: this.citySelection.value,
        change: 'add'
      } as CityChange));
    }
  }

  /** 
   * @remarks This method restarts or ends feeding the dropdown, 
   * this way dropdown doesn't have to render thousands of records at once.
   */
  public refeedCities(opened: boolean) {
    clearInterval(this.intervalId);
    this.viewCities = [];

    if (opened) {
      this.feedCities();
    } else {
      this.viewCities = this.cities.slice(0, 50);
    }
  }

  /** 
   * @remarks This method pulls the cities from the json file, 
   * and maps City objects to a simplified version.
   */
  private fetchCities() {
    this.http.get<City[]>('./assets/cities.json').pipe(
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

  /** 
   * @remarks This method feeds the selector on the view, 
   * so that all the objects are not sent at once. 
   */
  private feedCities(step = 400) {
    let lastIndex = 0;
    let newIndex = step;

    const push = (() => {
      this.viewCities.push(...this.cities.slice(lastIndex, newIndex));
      this.ref.detectChanges();

      lastIndex = newIndex;
      newIndex += step;
    });

    push();

    this.intervalId = window.setInterval(() => {

      if (newIndex > this.cities.length) { clearInterval(this.intervalId); }

      push();

    }, 600);
  }
}
