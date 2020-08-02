import { Component, OnInit, AfterViewInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import * as geolocation from 'nativescript-geolocation';
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Accuracy } from 'tns-core-modules/ui/enums';

import { APIService } from '../api/api.service';

import { FindClosestLocation_Result } from '../models/find-closest-location-result.model';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from "@angular/router";
import { Observable } from "tns-core-modules/ui/page/page";
import { Subscription } from "rxjs";
import { PlatformLocation } from "@angular/common";
import { isAndroid } from "tns-core-modules/platform";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import * as application from "tns-core-modules/application";

@Component({
    selector: "AutoLocate",
    templateUrl: "./auto-locate.component.html"
})
export class AutoLocateComponent implements OnInit, AfterViewInit {
    mySubscription: Subscription;
    locationSet: boolean = false;
    isFirstLoad: boolean = true;

    constructor(private api: APIService, private routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute, private location: PlatformLocation, private router: Router) {
        this.router.events.subscribe((ev) => {
          if (ev instanceof NavigationEnd) {
            if(ev.url == '/autolocate'){
              this.findNearestLocation();
            }
          }
        })
    }

    

    ngOnInit(): void {
    }

    initComponent = () => {
      //test
    }

    ngAfterViewInit(): void {
      if(this.isFirstLoad){
        this.findNearestLocation();
      }
    }

    
    

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    findNearestLocation = () => {
      console.log("location function");
      geolocation.enableLocationRequest().then(() => {
        geolocation.isEnabled().then(isLocationEnabled => {
          if(!isLocationEnabled){
            return;
          }

          geolocation.getCurrentLocation({desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000})
          .then(result => {
              this.api.getClosestLocation(result.latitude, result.longitude).subscribe((data: FindClosestLocation_Result) => {
                  let message = '';
                  if(data.distanceFrom < 100){
                      message = `Looks like you're at ${data.fullName}. Is this correct?`; 
                  }
                  else{
                      message = `We can't quite find you, looks like the nearest place we have is ${data.fullName}. Is this correct?`;
                  }
                  this.verifyLocation(message);
              });
          })

        })
      })
        this.isFirstLoad = false;
        // this.api.getClosestLocation()
    }

    verifyLocation = (message: string) => {
        dialogs.confirm({
          title: 'Where are you?',
          message: message,
          okButtonText: "Yes",
          cancelButtonText: "No",
        }).then(result => {
          this.changeRoute(result);
        }).catch(() => {

        })
      }

      changeRoute = (r) => {
        if(r){
          this.routerExtensions.navigate(["search"]);
        }
        else{
          this.routerExtensions.navigate(["selectlocation"]);
          
        }
      }

      
}
