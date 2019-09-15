import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {
  list$: Observable<any> = this.ps.read();
  title = 'Admin Site';
  product = new Product();

  constructor(private ps: ProductService) {
    ps.access();
  }

  onUpdate(ev: Event) {
    ev.preventDefault();
    this.ps.update(this.product).forEach(data => {
      data;
      console.log(this.product);
    })
  }

  ngOnInit() {
  }

}


