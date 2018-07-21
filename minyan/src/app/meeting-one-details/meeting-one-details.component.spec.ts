import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingOneDetailsComponent } from './meeting-one-details.component';

describe('MeetingOneDetailsComponent', () => {
  let component: MeetingOneDetailsComponent;
  let fixture: ComponentFixture<MeetingOneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingOneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingOneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
