import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingThirdDetailsComponent } from './meeting-third-details.component';

describe('MeetingThirdDetailsComponent', () => {
  let component: MeetingThirdDetailsComponent;
  let fixture: ComponentFixture<MeetingThirdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingThirdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingThirdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
