import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CitySelectorComponent } from './city-selector.component';

@NgModule({
  declarations: [
    CitySelectorComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatOptionModule,
    HttpClientModule
  ],
  exports: [
    CitySelectorComponent
  ],
  providers: [HttpClient]
})
export class CitySelectorModule { }
