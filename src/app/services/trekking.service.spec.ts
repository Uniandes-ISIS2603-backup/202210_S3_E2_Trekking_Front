/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrekkingService } from './trekking.service';

describe('Service: Trekking', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrekkingService]
    });
  });

  it('should ...', inject([TrekkingService], (service: TrekkingService) => {
    expect(service).toBeTruthy();
  }));
});
