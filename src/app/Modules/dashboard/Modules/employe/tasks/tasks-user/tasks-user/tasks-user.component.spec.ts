import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksUserComponent } from './tasks-user.component';

describe('TasksUserComponent', () => {
  let component: TasksUserComponent;
  let fixture: ComponentFixture<TasksUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksUserComponent]
    });
    fixture = TestBed.createComponent(TasksUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
