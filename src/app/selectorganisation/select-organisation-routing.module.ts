import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SelectOrganisationComponent } from "./select-organisation.component";

const routes: Routes = [
    { path: "", component: SelectOrganisationComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SelectOrganisationRoutingModule { }
