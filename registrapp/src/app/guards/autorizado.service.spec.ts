import { TestBed } from '@angular/core/testing';

import { AutorizadoService } from './autorizado.service';

describe('AutorizadoService', () => {
  let service: AutorizadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorizadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
