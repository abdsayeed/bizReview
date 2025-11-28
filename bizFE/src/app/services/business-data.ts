import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jsonData from '../assets/business.json';

@Injectable({
  providedIn: 'root',
})
export class BusinessData {

  pageSize: number = 3;

  constructor(private http: HttpClient) { }

  getBusinesses(page: number) {
    let pageStart = (page - 1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize; 
    return jsonData.slice(pageStart,pageEnd);
  }
  
  getLastPageNumber(){
    return Math.ceil(jsonData.length / this.pageSize);
  }

  getBusiness(id: any){
    let dataToReturn: any = [];
    jsonData.forEach(function(business){
      if (business._id.$oid == id){
        dataToReturn.push(business);
      }
    })
    return dataToReturn;
  }

  getLoremIpsum(paragraphs: number): Observable<any> {
    return this.http.get<any>(
      `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}`,
      {
        headers: {
          'X-Api-Key': 'YOUR_API_KEY_HERE'
        }
      }
    );
  }

  populateReviews() {
    let loremIpsum: string = "";
    let dummyReview: any = {};

    this.getLoremIpsum(1).subscribe((response: any) => {
      loremIpsum = response.text;
      
      jsonData.forEach(function(business: any) {
        let numReviews = Math.floor(Math.random() * 10);
        
        for (var i = 0; i < numReviews; i++) {
          let textSize = Math.floor(Math.random() * 290 + 10);
          let textStart = Math.floor(Math.random() * (loremIpsum.length - textSize));
          
          dummyReview = {
            'username': 'User ' + Math.floor(Math.random() * 9999 + 1),
            'comment': loremIpsum.slice(textStart, textStart + textSize),
            'stars': Math.floor(Math.random() * 5) + 1
          };
          
          business['reviews'].push(dummyReview);
        }
      });
    });
  }
  
}
