import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { WelcomeSplashComponent } from "./welcome-splash.component";

const routes: Routes = [
    { path: "", component: WelcomeSplashComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WelcomeSplashRoutingModule { }
