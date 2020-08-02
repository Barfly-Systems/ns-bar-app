import { Component, OnInit, AfterViewChecked, ɵConsole } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page";

import { ProductDetailedPricing } from "../../models/product-detailed-pricing.model";
import { OrderChange } from "~/app/models/order-chage.model";

import { APIService } from '../../api/api.service';
import { BasketService } from '../../shared/basket.service';
import { Basket } from "~/app/models/basket.model";
import { Order } from "~/app/models/order.model";
import { OrderItem } from "~/app/models/order-item.model";

@Component({
    moduleId: module.id,
    templateUrl: "./product-details-modal.component.html",
    styleUrls: ["./product-details-modal.component.scss"]
})
export class ProductDetailsModalComponent implements OnInit, AfterViewChecked {
    constructor(
        private _params: ModalDialogParams, 
        private _page: Page, private router: RouterExtensions, 
        private _activeRoute: ActivatedRoute, 
        private _api: APIService,
        private _basket: BasketService ) {}

    model;

    order: OrderItem[] = [];

    ngOnInit(): void {
        this.model = this._params.context;
        console.log(`MODEL PRODUCT DETAILS: ${JSON.stringify(this.model)}`);
        // console.error("from here:");
        // console.log(this._params.context);
        // console.error("...to here");
        this.getCurrentOrder();
    }

    ngAfterViewChecked(): void {
    }

    onClose(): void {
        this._params.closeCallback("return value");
    }

    handleOrderChange = (e: OrderChange) => {
        try{
            let item: OrderItem = { 
                id: null,
                orderId: null,
                productId: this.model.product.id, 
                sizeId: e.size_ID, 
                unitPriceGross: 12,  
                unitPriceNet: 13,
                totalPriceGross: 12,
                totalPriceNet: 13,
                qty: e.quantity, 
                modifier: false,
                isExtra: false,
                location: 1,
                name: this.model.product.name,
                sizeName: e.size
            };
            let orderIndex = this.order.findIndex(o => o.productId == item.productId && o.sizeId == e.size_ID);
            if(orderIndex == -1){
                this.order.push(item);
            }
            else{
                this.order.splice(orderIndex, 1, item);
                this.order = [...this.order.splice(orderIndex, 1, item)];
            }
        }
        catch(e){
            console.error(JSON.stringify(e));
        }
        
    }

    addToBasket = () => {
        console.log(`THIS ORDER: ${JSON.stringify(this.order)}`);
        this._basket.setBasket(this.order, this.model);
    }  

    getCurrentOrder = () => {
        let currentProductOrder = this._basket.getProductOrderFromBasketById(this.model.product.id);
        console.log(`CURRENT PRODUCT ORDER: ${JSON.stringify(currentProductOrder)}`);
        console.log(`MODEL PRODUCTPRICES ${JSON.stringify(this.model)}`);
        currentProductOrder.forEach(cpo => {
            let index = this.model.productDetails.productPrices.findIndex(pp => pp.size_ID == cpo.sizeId);
            if(index != -1){
                this.model.productDetails.productPrices[index].qty = cpo.qty;
            }            
        })
    }
}