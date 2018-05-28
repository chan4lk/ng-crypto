import { TestBed, inject } from '@angular/core/testing';

import { CyptoService } from './cypto.service';

describe('CyptoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CyptoService]
    });
  });

  it('should be created', inject([CyptoService], (service: CyptoService) => {
    expect(service).toBeTruthy();
  }));
});
