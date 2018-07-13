import { Component } from '@angular/core';

export interface PeriodicElement {
  bookname: string;
  position: number;
  authorname: string;
  numberofpages: number;
  price: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, bookname: 'C-Programming', authorname:'Ajay Mittal', numberofpages: 450,price:'350 Rs'},
  {position: 2, bookname: 'Java', authorname:'NageshwaraRao', numberofpages: 350,price:'400 Rs'},
  {position: 3, bookname: 'Php', authorname:'Alan Forbes', numberofpages: 350,price:'300 Rs'},
  {position: 4, bookname: 'Angular', authorname:'Adam Freeman', numberofpages: 450,price:'250 Rs'},
  {position: 5, bookname: 'Networking', authorname:'Ajay ', numberofpages: 200,price:'150 Rs'},
  
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'bookname', 'authorname', 'numberofpages','price'];
  dataSource = ELEMENT_DATA;}
