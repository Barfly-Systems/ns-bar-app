import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page, Color, colorProperty } from "tns-core-modules/ui/page/page";

@Component({
    selector: "WelcomeSplash",
    templateUrl: "./welcome-splash.component.html",
    styleUrls: ['./welcome-splash.component.scss']
})
export class WelcomeSplashComponent implements OnInit {

    _organisationName:string = '';

    constructor(private page: Page, private router: RouterExtensions, private activeRoute: ActivatedRoute) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.page.className = "page";
        this._organisationName = this.activeRoute.snapshot.params["name"];
        this.leaveSplashScreen();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    leaveSplashScreen = () => {
        setTimeout(() => {
            this.router.navigate(["productcategoryselect"]);
        }, 3000)
    }
}
