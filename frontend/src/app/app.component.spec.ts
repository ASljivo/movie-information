import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { MoviesInformationComponent } from './movies-information/movies-information.component';
import { MovieFormComponent } from './movies-information/movie-form/movie-form.component';
import { MovieFormResultComponent } from './movies-information/movie-form-result/movie-form-result.component';
import { LastTenMovieFormRequestsComponent } from './movies-information/last-ten-movie-form-requests/last-ten-movie-form-requests.component';
import { ErrorMessageTemplateComponent } from './shared/error-message/error-message.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MoviesInformationComponent,
        MovieFormComponent,
        MovieFormResultComponent,
        LastTenMovieFormRequestsComponent,
        ErrorMessageTemplateComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'movies-information-test-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('movies-information-test-project');
  });
});
