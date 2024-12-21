import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
        console.log('Product Details:', this.product);
      });
    }
  }

  editProduct() {
    const productId = this.route.snapshot.paramMap.get('id'); // Get the current product ID
    if (productId) {
      this.router.navigate(['/edit', productId]); // Navigate to 'edit/:id'
    }
  }
  
  async deleteProduct() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this product?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            const productId = this.route.snapshot.paramMap.get('id');
            if (productId) {
              this.productService.deleteProduct(productId).then(() => {
                console.log('Product deleted successfully');
                this.router.navigate(['/list']);
              });
            }
          },
        },
      ],
    });

    await alert.present();
  }
}
