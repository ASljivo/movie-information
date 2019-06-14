import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFormResultComponent } from './movie-form-result.component';

describe('MovieFormResultComponent', () => {
  let component: MovieFormResultComponent;
  let fixture: ComponentFixture<MovieFormResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieFormResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFormResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
