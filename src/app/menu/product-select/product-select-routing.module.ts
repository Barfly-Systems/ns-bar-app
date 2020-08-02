import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProductSelectComponent } from "./product-select.component";
import { ProductDetailsModalComponent } from "../product-details-modal/product-details-modal.component";

const routes: Routes = [
    { path: "", component: ProductSelectComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProductSelectRoutingModule { }
