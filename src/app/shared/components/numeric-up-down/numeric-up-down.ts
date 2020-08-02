import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { GetAllOrganisationsInLocation_Result } from './../../../models/get-all-organisations-in-location.model';
import { OrderChange } from '~/app/models/order-chage.model';

@Component({
  selector: 'ns-numeric-up-down',
  templateUrl: './numeric-up-down.component.html',
  styleUrls: ['./numeric-up-down.component.css']
})
export class NumericUpDownComponent implements OnInit {

  @Input() productSize: any;
  @Output() orderChanged: EventEmitter<OrderChange> = new EventEmitter();

  @Input() numberToOrder: number = 0;
  
  constructor(private router: RouterExtensions) { }

  ngOnInit(): void {
  }

  changeOrder = (toChangeBy: number) => {
    if(this.numberToOrder + toChangeBy >= 0){
      this.numberToOrder += toChangeBy; 
    }
    let change: OrderChange = {size: this.productSize.sizeName, size_ID: this.productSize.size_ID,  quantity: this.numberToOrder};
    this.orderChanged.emit(change);
  }


}
