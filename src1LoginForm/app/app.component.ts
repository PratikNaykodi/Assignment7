import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }

  
  public fun(UserName,password)
 {
  console.log(UserName,password);
 
 }
}
