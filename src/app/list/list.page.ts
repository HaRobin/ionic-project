import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private navCtrl: NavController) {}

  viewProduct(productId: string) {
    this.navCtrl.navigateForward(`/product-details/${productId}`);
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log('Products:', this.products);
    });
  }
}
