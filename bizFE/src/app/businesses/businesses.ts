import { Component } from '@angular/core';
import { BusinessData } from '../services/business-data';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { WebData } from '../web-data';
@Component({
  selector: 'app-businesses',
  imports: [RouterOutlet,RouterModule],
  providers: [BusinessData, WebData],
  templateUrl: './businesses.html',
  styleUrl: './businesses.css',
})
export class Businesses {
  business_list: any = [];
  page: number = 1;

  constructor(public businessData : BusinessData,
    public webService: WebData) { }

  ngOnInit() {
    if (sessionStorage['page']){
      this.page = Number(sessionStorage['page']);
    }
    // Use Web Service instead of BusinessData
    this.webService.getBusinesses(this.page).subscribe(
    (response) => {
      this.business_list = response;
    })
  }
  

  previousPage(){
    if(this.page > 1){
      this.page = this.page - 1;
      this.webService.getBusinesses(this.page).subscribe(
        (response) => {
          this.business_list = response;
        }
      );
      sessionStorage['page'] = this.page;
    }
  }

  nextPage() {
    // Remove dependency on getLastPageNumber, just try to fetch
    this.page = this.page + 1;
    this.webService.getBusinesses(this.page).subscribe(
      (response) => {
        if (response && response.length > 0) {
          this.business_list = response;
          sessionStorage['page'] = this.page;
        } else {
          // If no data, go back to previous page
          this.page = this.page - 1;
        }
      }
    );
  }
}
