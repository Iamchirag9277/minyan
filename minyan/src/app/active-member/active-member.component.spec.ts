import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveMemberComponent } from './active-member.component';

describe('ActiveMemberComponent', () => {
  let component: ActiveMemberComponent;
  let fixture: ComponentFixture<ActiveMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
