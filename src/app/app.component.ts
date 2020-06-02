import { LoggingService } from './logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app-initializer';

  constructor(private logging: LoggingService) {
    this.logging.log('logging was loaded from configuration');
  }
}
