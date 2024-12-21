import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    }
  }

  updateProduct() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.updateProduct(productId, this.product).then(() => {
        console.log('Product updated successfully');
        this.router.navigate(['/product-details', productId]);
      });
    }
  }
}
