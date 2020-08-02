import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BasketRoutingModule } from "./basket-routing.module";
import { BasketComponent } from "./basket.component";

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BasketRoutingModule,
        SharedModule
    ],
    declarations: [
        BasketComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BasketModule { }
