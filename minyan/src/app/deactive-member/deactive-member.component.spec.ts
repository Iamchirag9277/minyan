import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactiveMemberComponent } from './deactive-member.component';

describe('DeactiveMemberComponent', () => {
  let component: DeactiveMemberComponent;
  let fixture: ComponentFixture<DeactiveMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactiveMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactiveMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
