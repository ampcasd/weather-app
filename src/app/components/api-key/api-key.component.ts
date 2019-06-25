import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';

import { isNullOrUndefined } from 'util';
import { UpdateApi } from 'src/app/actions/api.action';
import { AppState } from 'src/app/state/app-state.interface';

@Component({
  selector: 'api-key',
  templateUrl: './api-key.component.html',
  styleUrls: ['./api-key.component.scss']
})
export class ApiKeyComponent implements OnDestroy {

  key: string;

  displayError: boolean;

  private storeSubscription: Subscription;

  constructor(private store: Store) {
    this.storeSubscription = store.select<AppState>(state => state).subscribe(state => this.key = state.api.key);
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

  public addKey() {
    this.displayError = false;

    if (!isNullOrUndefined(this.key) && this.key.trim() !== '') {
      this.store.dispatch(new UpdateApi(this.key));
    } else {
      this.displayError = true;
    }
  }
}
