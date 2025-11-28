import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebData {
  pageSize: number =3;
  constructor(private http:HttpClient){}
  getBusinesses(page:number){
    return this.http.get<any>(
      'http://127.0.0.1:5000/businesses?pn='+
      page + '&ps=' + this.pageSize
    );
  }

  getBusiness(id: string){
    return this.http.get<any>(
      'http://127.0.0.1:5000/businesses/' + id
    );
  }

  getLoremIpsum(paragraphs: number): Observable<any>{
    let YOUR_API_KEY = "YOUR_API_KEY_HERE";
    return this.http.get<any>(
      `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}`,
      {
        headers: {
          'X-Api-Key': YOUR_API_KEY
        }
      }
    );
  }

  postReview(review: any){
    let postData = new FormData();
    postData.append('username', review.username);
    postData.append('comment', review.comment);
    postData.append('stars', review.stars);
    
    let businessId = review.businessId;
    return this.http.post(
      'http://127.0.0.1:5000/businesses/' + businessId + '/reviews',
      postData
    );
  }

  getAllBusinesses(){
    return this.http.get<any>('http://127.0.0.1:5000/allbusinesses');
  }  
}
