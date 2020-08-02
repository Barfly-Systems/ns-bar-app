import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { WelcomeSplashRoutingModule } from "./welcome-splash-routing.module";
import { WelcomeSplashComponent } from "./welcome-splash.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        WelcomeSplashRoutingModule
    ],
    declarations: [
        WelcomeSplashComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WelcomeSplashModule { }
