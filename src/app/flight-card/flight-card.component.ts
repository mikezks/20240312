import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
