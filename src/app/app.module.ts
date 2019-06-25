import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { WeatherDashboardModule } from './weather-dashboard/weather-dashboard.module';
import { CityState } from './state/city.state';
import { ApiState } from './state/api.state';
import { ApiKeyModule } from './components/api-key/api-key.module';
import { NewCitySelectorModule } from './components/new-city-selector/new-city-selector.module';
import { CitySelectorModule } from './components/city-selector/city-selector.module';
import { NewestCitySelectorModule } from './components/newest-city-selector/newest-city-selector.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CitySelectorModule,
    WeatherDashboardModule,
    ApiKeyModule,
    NewCitySelectorModule,
    NewestCitySelectorModule,
    NgxsModule.forRoot([
      CityState,
      ApiState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
