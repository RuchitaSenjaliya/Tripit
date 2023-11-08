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
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
