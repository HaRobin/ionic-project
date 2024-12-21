import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private collectionName = 'products';

  constructor(private firestore: AngularFirestore) { }

  // Fetch all products
  getProducts(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).valueChanges({ idField: 'id' });
  }

  // Fetch a product by ID
  getProductById(id: string): Observable<any> {
    return this.firestore.collection(this.collectionName).doc(id).valueChanges();
  }

  deleteProduct(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

  updateProduct(id: string, product: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(product);
  }
  
  addProduct(product: any): Promise<void> {
    const id = this.firestore.createId(); // Generate a unique Firestore ID
    return this.firestore.collection('products').doc(id).set(product);
  }
}
