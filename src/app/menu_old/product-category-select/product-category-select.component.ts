import { Component, OnInit } from '@angular/core';

import { GetProductCategories_Result } from './../../models/get-product-categories-result.model';

import { APIService } from './../../api/api.service';

@Component({
  selector: 'ns-product-category-select',
  templateUrl: './product-category-select.component.html',
  styleUrls: ['./product-category-select.component.css']
})
export class ProductCategorySelectComponent implements OnInit {

  _categories: GetProductCategories_Result[] = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
  }

  getProductCategories = (organisationId: number) => {
    this.api.getProductCategories(organisationId).subscribe((data) => {
      console.log(data);
      this._categories = data;
    })
  }

}
