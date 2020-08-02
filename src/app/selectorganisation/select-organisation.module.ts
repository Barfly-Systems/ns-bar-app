import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SelectOrganisationRoutingModule } from "./select-organisation-routing.module";
import { SelectOrganisationComponent } from "./select-organisation.component";

import { SharedModule } from './../shared/shared.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SelectOrganisationRoutingModule,
        SharedModule
    ],
    declarations: [
        SelectOrganisationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SelectOrganisationModule { }
