import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletProjectComponent } from './delete-project.component';

describe('DeletProjectComponent', () => {
  let component: DeletProjectComponent;
  let fixture: ComponentFixture<DeletProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletProjectComponent]
    });
    fixture = TestBed.createComponent(DeletProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
