import { NgModule, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ProductSelectRoutingModule } from "./product-select-routing.module";
import { ProductSelectComponent } from "./product-select.component";
import { ProductDetailsModalComponent } from "../product-details-modal/product-details-modal.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProductSelectRoutingModule,
        SharedModule
    ],
    declarations: [
        ProductSelectComponent,
        ProductDetailsModalComponent
    ],
    entryComponents: [
        ProductDetailsModalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProductSelectModule {}        