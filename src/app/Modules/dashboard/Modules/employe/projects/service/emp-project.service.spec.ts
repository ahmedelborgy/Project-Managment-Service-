import { TestBed } from '@angular/core/testing';

import { EmpProjectService } from './emp-project.service';

describe('EmpProjectService', () => {
  let service: EmpProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
