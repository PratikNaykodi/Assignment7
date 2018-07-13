import { Component } from '@angular/core';

export interface City {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass7App2';
  selectedValue: string;

  Citys: City[] = [
    {value: 'Pune', viewValue: 'Pune'},
    {value: 'Mumbai', viewValue: 'Mumbai'},
    {value: 'Dehli', viewValue: 'Dehli'}
  ];
}
