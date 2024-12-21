import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage {
  product: any = {
    name: '',
    price: 0,
    description: '',
    stock: 0,
    category: '',
    images: [], // Array to store image URLs
  };

  constructor(private productService: ProductService, private router: Router) {}

  createProduct() {
    // Convert single image string into an array
    this.product.images = [this.product.images];

    this.productService.addProduct(this.product).then(() => {
      console.log('Product created successfully');
      this.router.navigate(['/list']); // Redirect to the product list page
    });
  }
}
