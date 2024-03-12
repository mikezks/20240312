import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight, initialFlight } from '../model/flight';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private http = inject(HttpClient);

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'https://demo.angulararchitects.io/api/flight';
    const params = { from, to };
    const headers = { 'Accept': 'application/json' };

    return this.http.get<Flight[]>(url, { params, headers });

    // return of([ initialFlight ]);
  }
}
