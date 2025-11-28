import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Businesses } from './businesses/businesses';
import { Navigation } from './navigation/navigation';
import { BusinessData } from './services/business-data';
@Component({
 selector: 'app-root',
 imports: [RouterOutlet, Businesses, Navigation],
 providers: [BusinessData],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
 export class App {
 protected title = 'bizFE';
 constructor(private dataService: BusinessData) { }
  ngOnInit() {
  this.dataService.populateReviews();
 }
}
