import { Component, Input, computed, effect, input, signal } from '@angular/core';
import { Flight, initialFlight } from '../model/flight';
import { DatePipe, NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [
    NgClass, NgStyle, DatePipe
  ],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent {
  item = input.required<Flight>();
  selected = input(false);
  protected selectedState = signal(false);
  protected flightWithSelection = computed(
    () => ({ ...this.item(), selected: this.selectedState() })
  );

  constructor() {
    effect(() => this.selectedState.set(this.selected()), {
      allowSignalWrites: true
    });

    effect(() => console.log(this.flightWithSelection()));
  }

  toggleSelection(): void {
    this.selectedState.update(selected => !selected);
  }
}
