import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalDialogOptions, ModalDialogService } from 'nativescript-angular/modal-dialog';
import { map } from 'rxjs/operators';

import { GetProductsFromCategory_Result } from '../../models/get-products-from-category-result.model';

import { APIService } from '../../api/api.service';
import { ProductDetailsModalComponent } from "../product-details-modal/product-details-modal.component";
import { ProductDetailedPricing } from "~/app/models/product-detailed-pricing.model";


@Component({
    selector: "ProductCategorySelect",
    templateUrl: "./product-select.component.html",
    styleUrls: ["./product-select.component.scss"]
})
export class ProductSelectComponent implements OnInit, AfterViewInit {
    
    _productList: GetProductsFromCategory_Result[] = [];

    constructor(private api: APIService, private activeRoute: ActivatedRoute, private _modalService: ModalDialogService, private _vcRef: ViewContainerRef) {}

    ngOnInit(): void {
        this.getAllProductsOfCategory();
    }

    initComponent = () => {
      //test
    }

    ngAfterViewInit(): void {}

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    getAllProductsOfCategory = () => {
        const organisationId: number = this.activeRoute.snapshot.params["organisationId"];
        const categoryId: number = this.activeRoute.snapshot.params["categoryId"];
        this.api.getProductsFromCategory(organisationId, categoryId).subscribe((data) => {
            this._productList = data;
        })
    }
    
    selectItem = (args) => {
        const options: ModalDialogOptions = {
            viewContainerRef : this._vcRef,
            context: null,
            fullscreen: true
        };

        this.api.getProductDetailsPricing(1000002,10000000).subscribe((data) => {
            options.context = { product: this._productList[args.index], productDetails: data }
            console.log(options.context);
            this._modalService.showModal(ProductDetailsModalComponent, options)
            .then((result) => {
                console.log(result);
            })
        })
    }
}
