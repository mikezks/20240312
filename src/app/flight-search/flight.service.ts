import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../model/flight';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

let config: 'default' | 'dummy' = 'default';

@Injectable({
  providedIn: 'root',
  useFactory: () => {
    if (config === 'dummy') {
      return new DummyFlightService();
    }
    return new DefaultFlightService();
  }
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
