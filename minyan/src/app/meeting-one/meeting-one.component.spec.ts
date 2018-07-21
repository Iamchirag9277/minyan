import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingOneComponent } from './meeting-one.component';

describe('MeetingOneComponent', () => {
  let component: MeetingOneComponent;
  let fixture: ComponentFixture<MeetingOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
