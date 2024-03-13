import { Component, Input } from '@angular/core';
import { initialFlight } from '../model/flight';
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
  @Input() item = initialFlight;
  @Input() selected = false;

  toggleSelection(): void {
    this.selected = !this.selected;
  }
}
