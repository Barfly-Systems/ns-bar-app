import { Component, OnInit, Input } from '@angular/core';
import { GetOrganisationLocations_Result } from './../../models/location-simple.model';

import { APIService } from './../../api/api.service';
import { RouterExtensions } from 'nativescript-angular/router';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchLocationComponent implements OnInit {

  @Input() lettersToBeginSearch: number = 3;
  @Input() listItems: GetOrganisationLocations_Result[] = [];


  mockData: GetOrganisationLocations_Result[] = [{"town":"Birmingham", "county": "west midlands"}, {"town": "Billesley", "county": "west midlands"}]
  searchTerm: string = '';
  
  constructor(private api: APIService, private routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
  }


  onItemTap = (args) => {
    this.routerExtensions.navigate(['selectorganisation', this.listItems[args.index].town])
  }

  trySearch = (e) => {
    const searchTerm = e.value;
    if(searchTerm.length >= this.lettersToBeginSearch){
      this.api.getLocationsListFromSearch(searchTerm).subscribe((data: GetOrganisationLocations_Result[]) => {
        console.log(data);
        this.listItems = [...data];
      })      
    }
    else{
      this.listItems = [];
    }
  }

}
