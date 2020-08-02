import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { GetAllOrganisationsInLocation_Result } from './../../models/get-all-organisations-in-location.model';

@Component({
  selector: 'ns-organisation-list',
  templateUrl: './basket-bottom-sheet.component.html',
  styleUrls: ['./basket-bottom-sheet.component.css']
})
export class BasketBottomSheetComponent implements OnInit {

  @Input() organisationList: GetAllOrganisationsInLocation_Result[] = [];

  constructor(private router: RouterExtensions) { }

  ngOnInit(): void {
  }

  onItemTap = (args) => {
    this.router.navigate([`welcomesplash/${this.organisationList[args.index].fullName}`])
    // console.log(this.organisationList[args.index].fullAddress);
  }

}
