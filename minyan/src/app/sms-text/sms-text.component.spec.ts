import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTextComponent } from './sms-text.component';

describe('SmsTextComponent', () => {
  let component: SmsTextComponent;
  let fixture: ComponentFixture<SmsTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
