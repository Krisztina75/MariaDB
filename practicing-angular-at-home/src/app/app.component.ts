import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { Observable} from 'rxjs';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list$: Observable<any> = this.ps.read();
  title = 'Admin Site';
  product = new Product();

  constructor(private ps: ProductService) {
    ps.access();
  }

  onDelete(id: number) {
    this.ps.delete(id).forEach(data => console.log('Ez a törölt product: ', data))
  }

  onCreate(ev: Event): void {
    ev.preventDefault();
    this.ps.create(this.product).forEach(data => {
      data;
      this.product = new Product()
    });
  }
}
