import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AutoLocateComponent } from "./auto-locate.component";

const routes: Routes = [
    { path: "", component: AutoLocateComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AutoLocateRoutingModule { }
