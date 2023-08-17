import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})

export class AllProductsComponent implements OnInit {
  products: IProduct[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: IProduct[] = [];
  // prdByCat: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.allProducts();
    this.allCategories();
  }

  allProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (prod: any) => {
        this.products = prod;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(`Error ${error}`);
      }
    );
  }

  allCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (cate: any) => {
        this.categories = cate;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(`Error ${error}`);
      }
    );
  }

  selectedCat(event: any) {
    let value = event.target.value
    if (value == 0) {
      this.allProducts()
    } else{
      this.productByCategory(value);
    }
  }

productByCategory(keyWord: string) {
  this.loading = true;
  this.service.getProductByCategory(keyWord).subscribe(
    (prdCate: any) => {
      this.products = prdCate;
      this.loading = false;
    },
    (error) => {
      this.loading = false;
      alert(`Error ${error}`);
    }
  );
}

addToCart(event: any) {
  if ('cart' in localStorage) {
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    let findCart = this.cartProducts.find(item=> item['item'].id == event.item.id);
    if (findCart) {
      alert('this product already added');
    } else {
      this.cartProducts.push(event)
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  } else {
    this.cartProducts.push(event)
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }
}

}
