import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTenMovieFormRequestsComponent } from './last-ten-movie-form-requests.component';

describe('LastTenMovieFormRequestsComponent', () => {
  let component: LastTenMovieFormRequestsComponent;
  let fixture: ComponentFixture<LastTenMovieFormRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTenMovieFormRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTenMovieFormRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
