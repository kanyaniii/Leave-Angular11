import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveBalanceDisplayComponent } from './leave-balance-display.component';

describe('LeaveBalanceDisplayComponent', () => {
  let component: LeaveBalanceDisplayComponent;
  let fixture: ComponentFixture<LeaveBalanceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveBalanceDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveBalanceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
