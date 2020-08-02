import { Injectable } from "@angular/core";

import { Basket } from './../models/basket.model';
import { Order } from './../models/order.model';

import { APIService } from './../api/api.service';
import { OrderItem } from "../models/order-item.model";

@Injectable({
    providedIn: "root"
})
export class BasketService{
    basket: Basket = { order: {organisationId: null, tableId: null, cost: null, received: null, delivered: null, orderStatusId: null}, status: 0, items: [] };

    setBasket = (newOrder: OrderItem[], order: Order) => {
        const itemsChanges = [];
        newOrder.forEach((item, i) => {
            let thisIndex = this.basket.items.findIndex(e => e.productId == item.productId && e.sizeId == item.sizeId);
            itemsChanges.push({newOrderIndex: i, basketIndex: thisIndex});
        })
        itemsChanges.forEach(newItem => {
            if(newItem.basketIndex == -1){
                console.log("DOESNT EXIST IN BASKET");
                if(newOrder[newItem.newOrderIndex].qty > 0){
                    this.basket.items.push(newOrder[newItem.newOrderIndex]);
                }
            }
            else{
                console.log("DOES EXIST IN BASKET");
                newOrder[newItem.newOrderIndex].qty === 0 ? this.basket.items.splice(newItem.basketIndex, 1)  : this.basket.items.splice(newItem.basketIndex, 1, newOrder[newItem.newOrderIndex]);
            }
        })
        this.basket.order = order;

        console.log(JSON.stringify(this.basket.items));
        // setTimeout(() => {
        //     console.log(JSON.stringify(this.basket.order));
        // }, 1000)
    }

    getBasket = () => {
        return this.basket;
    }

    getProductOrderFromBasketById = (productId: number) => {
        console.log(`PRODUCT ID: ${productId}`);
        console.log(JSON.stringify(this.basket.items));
        let els = this.basket.items.filter((i) => {
            return i.productId == productId;
        });
        console.log("HERE ADAM");
        console.log(els);
        return els;
    } 

    sendOrderOn = () => {
        console.log("HERE HERE HERE");
        console.log(JSON.stringify(this.basket));
    }
}