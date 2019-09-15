import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'http://localhost:3000/api/products';
  constructor(private http: HttpClient) { }

  access(): void {
    this.http.get(this.url).subscribe(
      (data) => console.log(data)
    )
  }

  read(): Observable<any> {
    return this.http.get(this.url);
  }

  delete(id: number): Observable<Product> {
    console.log('Deleted id: ', `${this.url}/${id}`);
    return this.http.delete<Product>(`${this.url}/${id}`);
  }

  create(data: Product): Observable<Product> {
    return this.http.post<Product>(this.url, data)
  }

  update(data: Product): Observable<Product> {
    return this.http.put<Product>(this.url, data);
    // return this.http.put<Product>(`${this.url}/${id}`, data);
  }
}
