import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';
import { FlightService } from './flight.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';


@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FlightCardComponent
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.scss'
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = 'Hamburg';
  to = 'Graz'
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  protected search(): void {
    this.flightService.find(this.from, this.to)
      .subscribe({
        next: flights => this.flights = flights,
        error: err => console.error('Error on loading flights', err)
      });
  }

  protected select(flight: Flight): void {
    this.selectedFlight = this.selectedFlight === flight ? undefined : flight;
  }
}
