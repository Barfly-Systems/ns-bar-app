import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SelectLocationComponent } from "./select-location.component";

const routes: Routes = [
    { path: "", component: SelectLocationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SelectLocationRoutingModule { }
