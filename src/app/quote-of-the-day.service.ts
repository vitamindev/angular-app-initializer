import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class QuoteOfTheDayService {
  constructor(private httpClient: HttpClient) {}

  fetchQuote() {
    return this.httpClient.get('https://quotes.rest/qod?language=en');
  }
}
