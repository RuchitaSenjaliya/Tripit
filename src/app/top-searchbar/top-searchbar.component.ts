import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-top-searchbar',
  templateUrl: './top-searchbar.component.html',
  styleUrls: ['./top-searchbar.component.css'],
})
export class TopSearchbarComponent {
  foods: Food[] = [
    { value: 'london-0', viewValue: 'London' },
    { value: 'paris-1', viewValue: 'Paris' },
    { value: 'newyork-2', viewValue: 'Newyork' },
  ];
}
