import { NgModule, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProductCategorySelectRoutingModule } from "./product-category-select-routing.module";
import { ProductCategorySelectComponent } from "./product-category-select.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProductCategorySelectRoutingModule
    ],
    declarations: [
        ProductCategorySelectComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProductCategorySelectModule {}        