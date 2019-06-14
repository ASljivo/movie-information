import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { MovieFormService } from './movie-form.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Movie } from './../models/movie';

describe('MovieFormService', () => {
  let service: MovieFormService;
  let httpTestingController: HttpTestingController;
  let data = [
    {
      title: 'Movie1',
      type: 'Triler',
      plot: 'Full',
      year: 2011,
      actor: 'Jim'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(MovieFormService);
  });

  it('should be created', () => {
    const movieService: MovieFormService = TestBed.get(MovieFormService);
    expect(movieService).toBeTruthy();
  });

  it('search should get movie information', fakeAsync(() => {
    service.getMovies(data[0]).subscribe(res => {
      expect(res[0]['title']).toBe('Movie1');
    });
    const req = httpTestingController.expectOne(
      `${
        environment.baseEndPoint
      }data/movies?title=Movie1&type=Triler&plot=Full&year=2011&actor=Jim`
    );

    req.flush(data);
    httpTestingController.verify();
    tick();
  }));

  it('search should get movie information', fakeAsync(() => {
    service.getFormRequests().subscribe(res => {
      expect(res[0]['title']).toBe('Movie1');
    });
    const req = httpTestingController.expectOne(
      `${environment.baseEndPoint}data/requests`
    );

    req.flush(data);
    httpTestingController.verify();
    tick();
  }));
});
