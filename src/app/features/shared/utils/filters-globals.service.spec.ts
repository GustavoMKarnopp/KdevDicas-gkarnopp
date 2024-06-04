import { TestBed } from '@angular/core/testing';

import { FiltersGlobalsService } from './filters-globals.service';

describe('FiltersGlobalsService', () => {
  let service: FiltersGlobalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersGlobalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
