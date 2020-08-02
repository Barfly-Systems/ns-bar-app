import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProductCategorySelectComponent } from "./product-category-select.component";

const routes: Routes = [
    { path: "/test", component: ProductCategorySelectComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProductCategorySelectRoutingModule { }
