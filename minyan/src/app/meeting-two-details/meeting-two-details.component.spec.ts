import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTwoDetailsComponent } from './meeting-two-details.component';

describe('MeetingTwoDetailsComponent', () => {
  let component: MeetingTwoDetailsComponent;
  let fixture: ComponentFixture<MeetingTwoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingTwoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingTwoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
