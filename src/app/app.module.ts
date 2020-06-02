import { LoggingService } from './logging.service';
import { ConfigurationService } from './configuration.service';
import { QuoteOfTheDayService } from './quote-of-the-day.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initLongRunningFactory } from './init-long-running.factory';
import { initWithDependencyFactory } from './init-with-dependency.factory';
import { initServicesFactory } from './init-services.factory';
import { initSynchronousFactory } from './init-synchronous.factory';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initSynchronousFactory,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initLongRunningFactory,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initWithDependencyFactory,
      deps: [QuoteOfTheDayService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initServicesFactory,
      deps: [ConfigurationService, LoggingService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
