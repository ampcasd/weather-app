import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { NewCitySelectorComponent } from './new-city-selector.component';

@NgModule({
  declarations: [
    NewCitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DropdownModule,
    MatButtonModule
  ],
  exports: [
    NewCitySelectorComponent
  ],
  providers: [HttpClient]
})
export class NewCitySelectorModule { }
