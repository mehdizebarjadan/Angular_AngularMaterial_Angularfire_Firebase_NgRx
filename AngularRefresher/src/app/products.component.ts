import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName = 'book';
  isDisabled = true;
  products = ['A Book', 'A Tree'];

  constructor() {
    setTimeout(() => {
      // this.productName = 'A new book';
      this.isDisabled = false;
    }, 2000);
  }

  onAddProduct() {
    this.products.push(this.productName);
  }

  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
  }
}
