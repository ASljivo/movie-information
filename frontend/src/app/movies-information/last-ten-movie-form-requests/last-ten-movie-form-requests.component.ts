import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-last-ten-movie-form-requests',
  templateUrl: './last-ten-movie-form-requests.component.html',
  styleUrls: ['./last-ten-movie-form-requests.component.scss']
})
export class LastTenMovieFormRequestsComponent implements OnInit {
  @Input() data: Movie[];

  constructor() {}

  ngOnInit() {}
}
