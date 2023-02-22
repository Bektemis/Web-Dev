import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

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
