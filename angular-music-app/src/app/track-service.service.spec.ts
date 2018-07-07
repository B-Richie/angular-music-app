import { TestBed, inject } from '@angular/core/testing';

import { TrackServiceService } from './track-service.service';

describe('TrackServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackServiceService]
    });
  });

  it('should be created', inject([TrackServiceService], (service: TrackServiceService) => {
    expect(service).toBeTruthy();
  }));
});
