import { NgModule, OnInit, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AutoLocateRoutingModule } from "./auto-locate-routing.module";
import { AutoLocateComponent } from "./auto-locate.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AutoLocateRoutingModule
    ],
    declarations: [
        AutoLocateComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AutoLocateModule {        
 }
