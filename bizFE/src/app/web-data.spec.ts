import { TestBed } from '@angular/core/testing';

import { WebData } from './web-data';

describe('WebData', () => {
  let service: WebData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
