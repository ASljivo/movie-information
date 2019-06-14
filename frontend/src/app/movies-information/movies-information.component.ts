import { MovieFormService } from './movie-form.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies-information',
  templateUrl: './movies-information.component.html',
  styleUrls: ['./movies-information.component.scss']
})
export class MoviesInformationComponent implements OnInit {
  movies: Movie[] = [];
  formRequests: Movie[] = [];

  constructor(private movieFormService: MovieFormService) {}

  ngOnInit() {
    this.getLastTenFormRequests();
  }

  getMovies(data: Movie): void {
    this.movieFormService.getMovies(data).subscribe(response => {
      this.movies = response;
      this.getLastTenFormRequests();
    });
  }

  getLastTenFormRequests(): void {
    this.movieFormService.getFormRequests().subscribe(data => {
      this.formRequests = data;
    });
  }
}
