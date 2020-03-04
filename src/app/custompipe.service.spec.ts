import { TestBed } from '@angular/core/testing';

import { CustompipeService } from './custompipe.service';

describe('CustompipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustompipeService = TestBed.get(CustompipeService);
    expect(service).toBeTruthy();
  });
});
