import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import { FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
