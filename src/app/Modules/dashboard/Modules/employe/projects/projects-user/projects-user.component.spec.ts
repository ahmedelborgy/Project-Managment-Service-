import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsUserComponent } from './projects-user.component';

describe('ProjectsUserComponent', () => {
  let component: ProjectsUserComponent;
  let fixture: ComponentFixture<ProjectsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsUserComponent]
    });
    fixture = TestBed.createComponent(ProjectsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
