import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFormComponent } from './movie-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorMessageTemplateComponent } from 'src/app/shared/error-message/error-message.component';

describe('MovieFormComponent', () => {
  let component: MovieFormComponent;
  let fixture: ComponentFixture<MovieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieFormComponent, ErrorMessageTemplateComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
