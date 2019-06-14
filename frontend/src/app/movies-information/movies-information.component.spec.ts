import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInformationComponent } from './movies-information.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieFormResultComponent } from './movie-form-result/movie-form-result.component';
import { LastTenMovieFormRequestsComponent } from './last-ten-movie-form-requests/last-ten-movie-form-requests.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorMessageTemplateComponent } from '../shared/error-message/error-message.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviesInformationComponent', () => {
  let component: MoviesInformationComponent;
  let fixture: ComponentFixture<MoviesInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MoviesInformationComponent,
        MovieFormComponent,
        LastTenMovieFormRequestsComponent,
        MovieFormResultComponent,
        ErrorMessageTemplateComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
