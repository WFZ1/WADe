/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Date.service.tsService } from './date.service.ts.service';

describe('Service: Date.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Date.service.tsService]
    });
  });

  it('should ...', inject([Date.service.tsService], (service: Date.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});