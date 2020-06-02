import { QuoteOfTheDayService } from './quote-of-the-day.service';
export function initWithDependencyFactory(
  quoteOFTheDayService: QuoteOfTheDayService
) {
  return () => {
    console.log('initWithDependencyFactory - started');
    return quoteOFTheDayService
      .fetchQuote()
      .toPromise()
      .then((result) => {
        console.log('result', result);
        console.log('initWithDependencyFactory - completed');
      });
  };
}
