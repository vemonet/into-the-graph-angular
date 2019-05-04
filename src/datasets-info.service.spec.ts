import { TestBed } from '@angular/core/testing';

import { DatasetsInfoService } from './datasets-info.service';

describe('DatasetsInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasetsInfoService = TestBed.get(DatasetsInfoService);
    expect(service).toBeTruthy();
  });
});
