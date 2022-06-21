import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FirebaseCreateProduct, FirebaseGetAllProduct, Product } from '../interfaces/interfaces-global';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	private urlFirebase: string = 'https://angular-curtains-default-rtdb.firebaseio.com';

	constructor(private http: HttpClient) {}

	public createProduct(product: Product): Observable<FirebaseCreateProduct> {
		return this.http.post<FirebaseCreateProduct>(`/api/products.json`, product);
	}

	public getAllProducts(): Observable<Product[]> {
		return this.http
		.get<Product[]>(`/api/products.json`)
		.pipe(
			map((productsObj: any) => {
				if (!productsObj) {
          return [];
        }
        return Object.keys(productsObj).map(key => {
					const obj: Product = {...productsObj[key], id: key};
					return obj;
				});
			})
		)
	}
}
