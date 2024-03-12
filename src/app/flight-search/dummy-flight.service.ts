import { Injectable } from '@angular/core';
import { FlightService } from './flight.service';
import { Observable, of } from 'rxjs';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements FlightService {
  find(): Observable<Flight[]> {
    return of([
      {
        id: 999,
        from: 'Madrid',
        to: 'Lisboa',
        date: new Date().toISOString(),
        delayed: true
      }
    ]);
  }
}
