import { Component, Input, OnDestroy, OnInit, computed, effect, input, model, signal } from '@angular/core';
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
export class FlightCardComponent implements OnInit, OnDestroy {
  item = input.required<Flight>();
  selected = model(false);

  ngOnInit(): void {
    console.log('Flight Card INIT', this.item().id);
  }

  toggleSelection(): void {
    this.selected.update(selected => !selected);
  }

  ngOnDestroy(): void {
    console.log('Flight Card DESTROY', this.item().id);
  }
}
