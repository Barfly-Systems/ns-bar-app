import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SearchLocationComponent } from './search/search.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { NumericUpDownComponent } from "./components/numeric-up-down/numeric-up-down";
import { BasketBottomSheetComponent } from './basket-bottom-sheet/basket-bottom-sheet.component';


@NgModule({
  declarations: [SearchLocationComponent, OrganisationListComponent, NumericUpDownComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule
  ],
  exports: [
    SearchLocationComponent,
    OrganisationListComponent,
    NumericUpDownComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
