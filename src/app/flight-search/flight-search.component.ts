import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../entities/flight';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs';


@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent {
  private http = inject(HttpClient);

  from = 'Hamburg';
  to = 'Graz'
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  // constructor(private http: HttpClient) {}

  protected search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const params = {
      from: this.from,
      to: this.to
    };

    const headers = {
      'Accept': 'application/json'
    };

    this.http.get<Flight[]>(url, { params, headers }).pipe(
      // map(flights => flights.filter(flight => flight.delayed !== true)),
      // filter(flights => flights.length > 1)
    )
      .subscribe({
        next: flights => {
          this.flights = flights;
          console.log(this.flights);
        },
        error: err => console.error('Error on loading flights', err)
      });
  }

  protected select(flight: Flight): void {
    this.selectedFlight = this.selectedFlight === flight ? undefined : flight;
  }
}
