import { TestBed } from '@angular/core/testing';

import { FlipkartAppService } from './flipkart-app.service';

describe('FlipkartAppService', () => {
  let service: FlipkartAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
