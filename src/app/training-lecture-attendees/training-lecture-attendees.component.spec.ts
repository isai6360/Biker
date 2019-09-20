import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLectureAttendeesComponent } from './training-lecture-attendees.component';

describe('TrainingLectureAttendeesComponent', () => {
  let component: TrainingLectureAttendeesComponent;
  let fixture: ComponentFixture<TrainingLectureAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingLectureAttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLectureAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
