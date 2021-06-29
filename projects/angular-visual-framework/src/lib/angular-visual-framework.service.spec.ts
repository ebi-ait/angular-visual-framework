import { TestBed } from '@angular/core/testing';

import { AngularVisualFrameworkService } from './angular-visual-framework.service';

describe('AngularVisualFrameworkService', () => {
  let service: AngularVisualFrameworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularVisualFrameworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
