import { movieTypes, plotTypes } from './../../shared/constants';
import { Movie } from './../../models/movie';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<Movie> = new EventEmitter<Movie>();
  movieForm: FormGroup;
  movieTypes = movieTypes;
  plotTypes = plotTypes;

  constructor() {}

  ngOnInit() {
    this.createMovieForm();
  }

  createMovieForm(): void {
    this.movieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      plot: new FormControl('', Validators.required),
      year: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+(.[0-9]{1,})?$')
      ]),
      actor: new FormControl('', Validators.required)
    });
  }

  get title() {
    return this.movieForm.get('title');
  }

  get type() {
    return this.movieForm.get('type');
  }

  get plot() {
    return this.movieForm.get('plot');
  }

  get year() {
    return this.movieForm.get('year');
  }

  get actor() {
    return this.movieForm.get('actor');
  }

  submitMovieForm(): void {
    this.submitForm.emit(this.movieForm.value);
  }
}
