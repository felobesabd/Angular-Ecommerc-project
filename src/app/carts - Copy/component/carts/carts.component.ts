import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { IProduct } from 'src/app/products/models/product';

@Component({
  providers: [],
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent implements OnInit {
  cartList: IProduct[] = [];
  total: number = 0;
  loading: boolean = false;

  constructor(private ser: CartsService) {}

  ngOnInit(): void {
    this.getCartList();
    this.totalPrice();
  }

  getCartList() {
    if ('cart' in localStorage) {
      this.cartList = JSON.parse(localStorage.getItem('cart')!);
      console.log(this.cartList);
      this.totalPrice();
    }
  }

  totalPrice() {
    this.total = 0;
    for (let x in this.cartList) {
      this.total += this.cartList[x]['item'].price * this.cartList[x]['quantity'];
    }
  }

  minsAmount(index: number) {
    this.cartList[index]['quantity']--;
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  addAmount(index: number) {
    this.cartList[index]['quantity']++;
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  changeInput() {
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  deleteProduct(index: number) {
    this.cartList.splice(index, 1);
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  deleteAllProduct() {
    this.cartList = [];
    this.totalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartList));
  }

  addCart() {
    let products = this.cartList.map((item) => {
      return {
        productID: item['item'].id,
        quantity: item['quantity'],
      };
    });
    const module = {
      userId: 5,
      date: new Date(),
      products: products,
    };
    this.ser.createNewCart(module).subscribe((res) => {
      this.loading = true;
      this.cartList = [];
      this.totalPrice();
      localStorage.setItem('cart', JSON.stringify(this.cartList));
      console.log(res);
    });
  }
}
