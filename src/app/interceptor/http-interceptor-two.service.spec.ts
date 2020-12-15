import { TestBed } from '@angular/core/testing';

import { HttpInterceptorTwoService } from './http-interceptor-two.service';

describe('HttpInterceptorTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpInterceptorTwoService = TestBed.get(HttpInterceptorTwoService);
    expect(service).toBeTruthy();
  });
});
