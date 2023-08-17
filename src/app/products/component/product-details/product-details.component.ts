import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  data: IProduct = {};
  loading: boolean = false;

  constructor(private actived: ActivatedRoute, private ser: ProductsService) {
    this.id = this.actived.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.productByID();
  }

  productByID() {
    this.ser.getProductByID(this.id).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
