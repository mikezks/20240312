import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { FlightService } from './flight-search/flight.service';
import { DefaultFlightService } from './flight-search/default-flight.service';
import { BASE_URL } from './app.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: FlightService,
      useClass: DefaultFlightService
    },
    /* {
      provide: BASE_URL,
      useValue: 'this-url-is-not-working'
    }, */
  ]
};
