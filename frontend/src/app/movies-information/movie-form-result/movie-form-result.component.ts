import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-form-result',
  templateUrl: './movie-form-result.component.html',
  styleUrls: ['./movie-form-result.component.scss']
})
export class MovieFormResultComponent {
  @Input() data: Movie[];

  constructor() {}
}
