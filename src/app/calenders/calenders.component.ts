import { Component } from '@angular/core';

@Component({
  selector: 'app-calenders',
  templateUrl: './calenders.component.html',
  styleUrls: ['./calenders.component.css'],
})
export class CalendersComponent {
  selected: Date | null = null;
  selected2: Date | null = null;
}
