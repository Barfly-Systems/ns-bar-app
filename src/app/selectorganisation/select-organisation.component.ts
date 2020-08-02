import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { APIService } from './../api/api.service';
import { GetAllOrganisationsInLocation_Result } from "../models/get-all-organisations-in-location.model";

@Component({
    selector: "SelectOrganisation",
    templateUrl: "./select-organisation.component.html"
})
export class SelectOrganisationComponent implements OnInit {

    matchedOrganisations: GetAllOrganisationsInLocation_Result[] = [];

    constructor(private activeRoute: ActivatedRoute, private api: APIService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.api.getOrganisationsInLocation(this.activeRoute.snapshot.params["id"]).subscribe((data) => {
            this.matchedOrganisations = data;
        })
    
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
