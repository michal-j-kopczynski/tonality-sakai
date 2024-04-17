import { TestBed } from '@angular/core/testing';

import { AudioPlayerComponentComponentService } from './audio-player-component.component.service';

describe('AudioPlayerComponentComponentService', () => {
  let service: AudioPlayerComponentComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioPlayerComponentComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
