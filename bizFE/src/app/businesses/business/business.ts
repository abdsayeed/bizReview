import { Component } from '@angular/core';
import { BusinessData } from '../../services/business-data';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { WebData } from '../../web-data';
@Component({
  selector: 'app-business',
  imports: [RouterLink, CommonModule, GoogleMapsModule, ReactiveFormsModule],
  providers: [BusinessData, WebData],
  templateUrl: './business.html',
  styleUrl: './business.css',

})
export class Business {
  business_list: any = [];
  business_lat: any;
  business_lng: any;
  map_options: google.maps.MapOptions = { };
  map_locations: any[] = [ ];
  reviewForm: any;

  constructor (private route: ActivatedRoute,
               private businessData: BusinessData,
               private webData : WebData,
               private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.reviewForm = this.formBuilder.group({
      username: '',
      comment: '',
      stars: 5
    });

    const businessId = this.route.snapshot.paramMap.get('id');
    
    // Fetch business from Web Service
    this.webData.getBusiness(businessId!).subscribe(
      (response: any) => {
        this.business_list = [response];
        
        if (this.business_list[0] && this.business_list[0].location) {
          this.business_lat = this.business_list[0].location.coordinates[0];
          this.business_lng = this.business_list[0].location.coordinates[1];

          this.map_locations.push({
            lat: this.business_lat,
            lng: this.business_lng
          });

          this.map_options = {
            mapId:"DEMO_MAP_ID",
            center: {lat: this.business_lat,
                     lng: this.business_lng},
            zoom: 13
          };
        }
      }
    );
  }

  onSubmit() {
    const businessId = this.route.snapshot.paramMap.get('id');
    const reviewData = {
      username: this.reviewForm.value.username,
      comment: this.reviewForm.value.comment,
      stars: this.reviewForm.value.stars,
      businessId: businessId
    };

    this.webData.postReview(reviewData).subscribe(
      (response: any) => {
        console.log('Review submitted successfully', response);
        // Refresh the business data to show the new review
        this.webData.getBusiness(businessId!).subscribe(
          (response: any) => {
            this.business_list = [response];
          }
        );
        // Reset the form
        this.reviewForm.reset({
          username: '',
          comment: '',
          stars: 5
        });
      },
      (error) => {
        console.error('Error submitting review', error);
      }
    );
  }
}
