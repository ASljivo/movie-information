import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesInformationModule } from './movies-information/movies-information.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MoviesInformationModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
