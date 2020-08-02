import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PaymentRoutingModule } from "./payment-routing.module";
import { PaymentComponent } from "./payment.component";

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PaymentRoutingModule,
        SharedModule
    ],
    declarations: [
        PaymentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PaymentModule { }
