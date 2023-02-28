import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  // @ts-ignore
  public categoryId: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routeParams.get('categoryId'));
  }
  onProductRemove(product: any) {
    const index: number = this.products.indexOf(product);
    if (index != -1) {
      this.products.splice(index, 1);
    }
  }
  share(sh: number) {
    window.open(
      `https://api.whatsapp.com/send/?phone=77777770777&text=Здравствуйте! Хочу приобрести этот продукт ${
        products[sh - 1]['link']
      }&type=phone_number&app_absent=0`
    );
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
