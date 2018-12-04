import { TestBed, inject } from '@angular/core/testing';

import { ArtistService } from './artist-service.service';

describe('ArtistServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistService]
    });
  });

  it('should be created', inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
  }));
});
