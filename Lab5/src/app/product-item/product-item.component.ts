import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  products = products;
  // @ts-ignore
  @Input() categoryId: number;
  @Input() product: Product | undefined;
  @Output() remove = new EventEmitter();
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  like(product: any) {
    product.like += 1;
  }
  removeProduct() {
    this.remove.emit(this.product);
  }
}
