import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerprofileComponent } from './bikerprofile.component';

describe('BikerprofileComponent', () => {
  let component: BikerprofileComponent;
  let fixture: ComponentFixture<BikerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
