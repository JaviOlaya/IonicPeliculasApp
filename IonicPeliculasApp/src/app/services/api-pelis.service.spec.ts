import { TestBed } from '@angular/core/testing';

import { ApiPelisService } from './api-pelis.service';

describe('ApiPelisService', () => {
  let service: ApiPelisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPelisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
