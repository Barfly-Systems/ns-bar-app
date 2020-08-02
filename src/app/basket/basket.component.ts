import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { BasketService } from './../shared/basket.service';
import { BasketRoutingModule } from "./basket-routing.module";
import { Basket } from "../models/basket.model";
import { APIService } from './../api/api.service';
import { OrderRequest } from "../models/order-request.model";
import { Order } from "../models/order.model";
import { OrderItem } from "../models/order-item.model";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Basket",
    templateUrl: "./basket.component.html"
})
export class BasketComponent implements OnInit {

        basket: Basket;

        constructor(private _basket: BasketService, private _api: APIService, private router: RouterExtensions) {
            // Use the component constructor to inject providers.
        }

        ngOnInit(): void {
            this.basket = this._basket.getBasket();
            console.log(`BASKET: ${JSON.stringify(this.basket)}`);
        }

        onDrawerButtonTap(): void {
            const sideDrawer = <RadSideDrawer>app.getRootView();
            sideDrawer.showDrawer();
        }

        removeItem = (e) => {

        }

        sendOrder = () => {
            this._basket.sendOrderOn();
        }

        goToPayment = () => {
            this.router.navigate(["paymentscreen"]);
        }

    /*TESTING SIGNALR*/
    sendSocketOrder = (organisationId: number) => {
        let order: Order = {organisationId: 1000002, tableId: 10000000, cost: 25.00, received: new Date(), delivered: new Date(), orderStatusId: 1};
        let orderItems: OrderItem[] = [];
        
        let basketItems = this.basket.items.forEach(item => {
            let thisItem: OrderItem = {
                id: null,
                orderId: null,
                productId: item.productId,
                name: item.name,
                sizeId: item.sizeId,
                unitPriceGross: item.unitPriceGross,
                unitPriceNet: item.unitPriceNet,
                totalPriceGross: item.totalPriceGross,
                totalPriceNet: item.totalPriceNet,
                qty: item.qty,
                modifier: false,
                isExtra: false,
                sizeName: item.sizeName,
                location: 1
            }
            orderItems.push(thisItem);
        });
        console.log(`ORDER ITEMS: ${JSON.stringify(orderItems)}`);

        // let orderItems: Order = this.basket.order;
        // let order: Order = {organisationId : organisationId, tableId: 10000000, cost: 5.00, received: new Date(), delivered: new Date(), orderStatusId: 1,items: orderItems};
        let orderRequest: OrderRequest = {order: order, items: orderItems};
        // console.log(`ORDER REQUEST: ${JSON.stringify(orderRequest)}`);
        // this._api.testSendOrder(orderRequest).subscribe(data => {
        //     console.log(data);
        // })    
        this._api.testSendOrderTrue(orderRequest).subscribe(data => {
            console.log(data);
        })    
    }
}
