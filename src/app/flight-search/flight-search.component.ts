import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../entities/flight';


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
  from = 'Hamburg';
  to = 'Graz'
  flights: Flight[] = [];
  selectedFlight: Flight | undefined;

  protected search(): void {
    console.log(
      this.from,
      this.to
    );
  }

  protected select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
