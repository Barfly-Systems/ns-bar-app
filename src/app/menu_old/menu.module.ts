import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ProductCategorySelectComponent } from './product-category-select/product-category-select.component';

import { ProductCategorySelectRoutingModule } from './product-category-select/product-category-select-routing.module';

@NgModule({
  declarations: [ProductCategorySelectComponent],
  imports: [
    NativeScriptCommonModule,
    ProductCategorySelectRoutingModule
  ],
  exports: [
    ProductCategorySelectComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule { }
