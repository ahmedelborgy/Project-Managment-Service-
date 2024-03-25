import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyuserComponent } from './verifyuser.component';

describe('VerifyuserComponent', () => {
  let component: VerifyuserComponent;
  let fixture: ComponentFixture<VerifyuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyuserComponent]
    });
    fixture = TestBed.createComponent(VerifyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
