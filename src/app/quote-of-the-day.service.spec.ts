import { TestBed } from '@angular/core/testing';

import { QuoteOfTheDayService } from './quote-of-the-day.service';

describe('QuoteOfTheDayService', () => {
  let service: QuoteOfTheDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteOfTheDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
