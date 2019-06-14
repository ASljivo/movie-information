import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieFormResultComponent } from './movie-form-result/movie-form-result.component';
import { LastTenMovieFormRequestsComponent } from './last-ten-movie-form-requests/last-ten-movie-form-requests.component';
import { MoviesInformationComponent } from './movies-information.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MovieFormComponent,
    MovieFormResultComponent,
    LastTenMovieFormRequestsComponent,
    MoviesInformationComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
  exports: [MoviesInformationComponent]
})
export class MoviesInformationModule {}
