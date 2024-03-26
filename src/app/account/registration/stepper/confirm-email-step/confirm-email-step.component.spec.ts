import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmailStepComponent } from './confirm-email-step.component';

describe('ConfirmEmailStepComponent', () => {
  let component: ConfirmEmailStepComponent;
  let fixture: ComponentFixture<ConfirmEmailStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmEmailStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmEmailStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
