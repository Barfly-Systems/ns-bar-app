import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { BasketService } from '../shared/basket.service';
import { PaymentRoutingModule } from "./payment-routing.module";
import { Basket } from "../models/basket.model";
import { APIService } from '../api/api.service';
import { OrderRequest } from "../models/order-request.model";
import { Order } from "../models/order.model";
import { OrderItem } from "../models/order-item.model";
import { PaymentTokenRequest } from "../models/payment-request.model";
import { PaymentAttempt } from "../models/payment-attempt.model";

@Component({
    selector: "PaymentComponent",
    templateUrl: "./payment.component.html"
})
export class PaymentComponent implements OnInit {

    basket: Basket;

    constructor(private _basket: BasketService, private _api: APIService) {
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

    getPaymentToken = () => {
        let req:PaymentTokenRequest = {
           reusable: false,
           paymentMethod: {
               name: "Adam Strain",
               expiryMonth: 2,
               expiryYear: 2021,
               issueNumber: 1,
               startMonth: 2,
               startYear: 2013,
               cardNumber: "4462030000000000",
               type: "Card",
               cvc: "123"
           },
           clientKey: "T_C_ccaf8ad6-ac3f-4044-ae60-545c280b8b58"
         }
     
         this._api.getPaymentRequestToken(req).subscribe((data: any) => {
           let paymentSend: PaymentAttempt = {
             orderToken: data.token,
             orderValue: 500,
             name: data.paymentMethod.name,
             orderDescription: 'Hare and Hounds (RG15258)',
             customerOrderCode: 'RG15258',
           } 
           this.sendPaymentAttempt(paymentSend);
         })
    };

    sendPaymentAttempt = (paymentAttempt: PaymentAttempt) => {
        this._api.sendPaymentAttempt(paymentAttempt).subscribe((data) => {
            console.log(data);
        })
    }

}
