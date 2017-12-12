/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Create_aricleService } from './create_aricle.service';

describe('Service: Create_aricle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Create_aricleService]
    });
  });

  it('should ...', inject([Create_aricleService], (service: Create_aricleService) => {
    expect(service).toBeTruthy();
  }));
});