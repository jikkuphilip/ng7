import { TestBed } from '@angular/core/testing';

import { ToastSrvService } from './toast-srv.service';

describe('ToastSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastSrvService = TestBed.get(ToastSrvService);
    expect(service).toBeTruthy();
  });
});
