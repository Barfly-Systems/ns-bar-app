import { Component, OnInit, AfterViewInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';

import { GetProductCategories_Result } from '../../models/get-product-categories-result.model';

import { APIService } from '../../api/api.service';


@Component({
    selector: "ProductCategorySelect",
    templateUrl: "./product-category-select.component.html",
    styleUrls: ["./product-category-select.component.scss"]
})
export class ProductCategorySelectComponent implements OnInit, AfterViewInit {
    
    _categoryList: GetProductCategories_Result[] = [];

    constructor(private api: APIService, private router: RouterExtensions) {}

    ngOnInit(): void {
        this.getAllProductCategories();
    }

    initComponent = () => {
      //test
    }

    ngAfterViewInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    getAllProductCategories = () => {
        this.api.getProductCategories(1000002).subscribe((data) => {
            this._categoryList = data;
        })
    }

    selectItem = (item) => {
        this.router.navigate([`productselect/1000002/${item.id}`]);
    }

}
