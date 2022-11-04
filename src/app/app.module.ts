import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatableComponent } from './datable/datable.component';
import { FftcalComponent } from './fftcal/fftcal.component';

@NgModule({
  declarations: [
    AppComponent,
    DatableComponent,
    FftcalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(BackendService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
