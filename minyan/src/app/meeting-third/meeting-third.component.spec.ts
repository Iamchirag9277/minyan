import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingThirdComponent } from './meeting-third.component';

describe('MeetingThirdComponent', () => {
  let component: MeetingThirdComponent;
  let fixture: ComponentFixture<MeetingThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
