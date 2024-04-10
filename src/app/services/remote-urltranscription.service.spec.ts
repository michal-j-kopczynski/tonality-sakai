import { TestBed } from '@angular/core/testing';

import { RemoteURLTranscriptionService } from './remote-urltranscription.service';

describe('RemoteURLTranscriptionService', () => {
  let service: RemoteURLTranscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteURLTranscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
