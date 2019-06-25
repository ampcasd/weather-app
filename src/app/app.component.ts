import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { SelectorVersion } from './components/city-selector/city-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  readonly versions = SelectorVersion;

  title = 'weather';
  selectorVersion = SelectorVersion.three;
  displayApiInput: boolean;

  mobileQuery: MediaQueryList;

  links = [
    { label: 'Select v. 3.0 #autocomplete', action: () => this.openSelector(SelectorVersion.three) },
    { label: 'Select v. 2.0 #virtual-scroll', action: () => this.openSelector(SelectorVersion.two) },
    { label: 'Select v. 1.0 #manual-labour', action: () => this.openSelector(SelectorVersion.one) },
    { label: 'API Key', action: () => this.displayApiInput = true },
  ];

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  private openSelector(v: SelectorVersion) {
    this.selectorVersion = v;
    this.displayApiInput = false;
  }
}
