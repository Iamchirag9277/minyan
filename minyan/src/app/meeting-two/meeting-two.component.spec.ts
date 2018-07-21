import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTwoComponent } from './meeting-two.component';

describe('MeetingTwoComponent', () => {
  let component: MeetingTwoComponent;
  let fixture: ComponentFixture<MeetingTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
