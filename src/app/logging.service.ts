import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  enabled: boolean;

  constructor() {}

  initialize(enabled: boolean) {
    this.enabled = enabled;
  }

  log(message: string) {
    if (this.enabled) {
      console.log(message);
    }
  }
}
