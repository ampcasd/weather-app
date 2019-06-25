import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

import { ApiKeyComponent } from './api-key.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ApiKeyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    MatButtonModule
  ],
  exports: [
    ApiKeyComponent
  ],
  providers: []
})
export class ApiKeyModule { }
