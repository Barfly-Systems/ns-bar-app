import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { FindClosestLocation_Result } from '../models/find-closest-location-result.model';
import { GetOrganisationLocations_Result } from '../models/location-simple.model';
import { GetAllOrganisationsInLocation_Result } from "../models/get-all-organisations-in-location.model";
import { GetProductCategories_Result } from "../models/get-product-categories-result.model";
import { GetProductsFromCategory_Result } from '../models/get-products-from-category-result.model';
import { ProductDetailedPricing } from "../models/product-detailed-pricing.model";
import { throwError } from "rxjs";
import { OrderRequest } from "../models/order-request.model";
import { Order } from "../models/order.model";
import { PaymentTokenRequest } from "../models/payment-request.model";
import { PaymentAttempt } from "../models/payment-attempt.model";

@Injectable({
    providedIn: "root"
})
export class APIService {

    readonly _isDevMode: boolean = false;
    readonly _apiUrl = 'http://35.214.106.155:44201/api';
    readonly _devApiUrl ='https://localhost:44339/api'

    readonly httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(private http: HttpClient){}

    getClosestLocation = (lat: number, lng: number) => {
        return this.http.get<FindClosestLocation_Result>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/location/GetClosestLocation/${lat}/${lng}`);
    }

    getLocationsList = () => {
        return this.http.get<GetOrganisationLocations_Result[]>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/location/GetOrganisationLocations`);
    }

    getLocationsListFromSearch = (searchTerm: string) => {
        return this.http.get<GetOrganisationLocations_Result[]>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/location/GetOrganisationLocationsFromSearch/${searchTerm}`);
    }

    getOrganisationsInLocation = (location: string) => {
        return this.http.get<GetAllOrganisationsInLocation_Result[]>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/location/GetAllOrganisationsInLocation/${location}`);
    }

    getProductCategories = (organisationId: number) => {
        return this.http.get<GetProductCategories_Result[]>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/getCategories/${organisationId}/false/false`);
    }

    getProductsFromCategory = (organisationId: number, categoryId: number) => {
        return this.http.get<GetProductsFromCategory_Result[]>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/getProductsFromCategory/${organisationId}/${categoryId}/false`);
    }

    getProductDetailsPricing = (organisationId: number, productId: number) => {
        return this.http.get<ProductDetailedPricing>(`${this._isDevMode ? this._devApiUrl : this._apiUrl}/product/getProductPricingDetails/${organisationId}/${productId}`);
    }

    /*PAYMENT SECTION*/
    getPaymentRequestToken = (req: PaymentTokenRequest) => {
      return this.http.post(`https://api.worldpay.com/v1/tokens`, req, this.httpOptions);
    }

    sendPaymentAttempt = (req: PaymentAttempt) => {
      return this.http.post(`${this._apiUrl}/payment`, req, this.httpOptions)
    }

    /*TESTING SIGNALR*/
    testSendOrder(orderRequest: OrderRequest){
        console.log(JSON.stringify(orderRequest));
        let message = {"Type": "success", "OrganisationId": 1000002, "LocationId": 1, "Payload": orderRequest};
        let headers = this.createRequestHeader();
          try{
            console.log(`${this._apiUrl}/message`);
            return this.http
           .post(`${this._apiUrl}/message`, message,  { headers: headers, responseType: 'text' })
           .pipe(
             
           )
          } 
          catch(ex){
            console.log(ex);
          }
      }

      testSendOrderTrue(orderRequest: OrderRequest){
        console.log(JSON.stringify(orderRequest));
        let message = {"Type": "success", "OrganisationId": 1000002, "LocationId": 1, "Payload": orderRequest};
        let headers = this.createRequestHeader();
          try{
            console.log(`${this._apiUrl}/message`);
            return this.http
           .post(`${this._apiUrl}/message/CreateOrder`, orderRequest,  { headers: headers, responseType: 'text' })
           .pipe(
             
           )
          } 
          catch(ex){
            console.log(ex);
          }
      }
      

    private createRequestHeader() {
      // set headers here e.g.
      let headers = new HttpHeaders({
          "Content-Type": "application/json"
          });

      return headers;
    }
  
    private handleError(error: HttpErrorResponse) {
      console.error(error.status);
      console.error(JSON.stringify(error.message));
      
      return throwError(
        'Something bad happened; please try again later.');
    };
}