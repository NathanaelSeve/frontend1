import { TestBed } from '@angular/core/testing';

import { ReservationService} from './reservation.service';

describe('$componentNameService', () => {
  let service: ReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
