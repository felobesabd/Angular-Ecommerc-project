import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  providers: [],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() data: IProduct = {};
  @Output() item = new EventEmitter();
  clickCart: boolean = false;
  amount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.item.emit({
      item: this.data,
      quantity:this.amount
    });
  }

}
