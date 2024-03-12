import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export interface Flight {
  id: number;
  city: string;
}

@Component({
  standalone: true,
  imports: [SidebarComponent, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello Angular!';
  flights: Array<Flight> = [];

  changeTitle(): void {
    if (this.title === 'Hello Angular!') {
      this.title =  'Hello World!';
    } else {
      this.title = 'Hello Angular!';
    }
  }
}
