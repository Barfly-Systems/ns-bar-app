import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SelectLocationRoutingModule } from "./select-location-routing.module";
import { SelectLocationComponent } from "./select-location.component";

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SelectLocationRoutingModule,
        SharedModule
    ],
    declarations: [
        SelectLocationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SelectLocationModule { }
