import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { NewestCitySelectorComponent } from './newest-city-selector.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [
    NewestCitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AutoCompleteModule,
    HttpClientModule,
    MatButtonModule
  ],
  exports: [
    NewestCitySelectorComponent
  ],
  providers: [HttpClient]
})
export class NewestCitySelectorModule { }
