import { Component, OnInit } from '@angular/core';
import { WebData } from '../web-data';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-business-grid',
  imports: [AgGridAngular],
  providers: [WebData],
  templateUrl: './business-grid.html',
  styleUrl: './business-grid.css',
})
export class BusinessGrid implements OnInit {
  businesses: any[] = [];
  
  // Column Definitions
  colDefs: ColDef[] = [
    { field: 'name', headerName: 'Business Name', filter: true, sortable: true },
    { field: 'town', headerName: 'Town', filter: true, sortable: true },
    { field: 'rating', headerName: 'Rating', filter: true, sortable: true, width: 120 },
    { 
      field: 'reviews', 
      headerName: 'Review Count', 
      valueGetter: (params: any) => params.data.reviews ? params.data.reviews.length : 0,
      sortable: true,
      width: 150
    }
  ];

  // Default column definition
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true
  };

  // Pagination settings
  pagination = true;
  paginationPageSize = 10;
  paginationPageSizeSelector = [10, 20, 50, 100];

  constructor(private webService: WebData) {}

  ngOnInit() {
    this.webService.getAllBusinesses().subscribe(
      (response: any) => {
        this.businesses = response;
      },
      (error) => {
        console.error('Error fetching businesses:', error);
      }
    );
  }
}
