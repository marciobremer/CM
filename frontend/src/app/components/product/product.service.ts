import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "bottom"
    })
  }
// create a product and return a Observable of <Product>
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  // read products and return a Observable of procuts array <Product[]>
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
