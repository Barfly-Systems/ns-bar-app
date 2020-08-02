import { NgModule } from "@angular/core";
import { Routes, Router, NavigationStart } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/autolocate", pathMatch: "full" },
    { path: "autolocate", loadChildren: () => import("~/app/autolocate/auto-locate.module").then((m) => m.AutoLocateModule) },
    { path: "selectlocation", loadChildren: () => import("~/app/selectlocation/select-location.module").then((m) => m.SelectLocationModule) },
    { path: "selectorganisation/:id", loadChildren: () => import("~/app/selectorganisation/select-organisation.module").then((m) => m.SelectOrganisationModule) },
    { path: "welcomesplash/:name", loadChildren: () => import("~/app/welcomesplash/welcome-splash.module").then((m) => m.WelcomeSplashModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "productcategoryselect", loadChildren: () => import("~/app/menu/product-category-select/product-category-select.module").then((m) => m.ProductCategorySelectModule) },
    { path: "productselect/:organisationId/:categoryId", loadChildren: () => import("~/app/menu/product-select/product-select.module").then((m) => m.ProductSelectModule) },
    { path: "viewbasket", loadChildren: () => import("~/app/basket/basket.module").then((m) => m.BasketModule)},
    { path: "paymentscreen", loadChildren: () => import("~/app/payment/payment.module").then((m) => m.PaymentModule)}
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
