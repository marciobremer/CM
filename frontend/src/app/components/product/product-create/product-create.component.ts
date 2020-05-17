import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // product for test
  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Product successfully created!')
      this.product.name = '',
      this.product.price = null
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
