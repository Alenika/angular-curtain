import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/interfaces-global';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-page-catalog',
  templateUrl: './page-catalog.component.html',
  styleUrls: ['./page-catalog.component.scss']
})
export class PageCatalogComponent implements OnInit {

	allProductsObservable: Observable<Product[]> = this.apiService.getAllProducts();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
		const product: Product = {
			color: 'black',
			corniceLength: 240,
			curtainHeight: 200,
			curtainWidth: 150,
			country: 'Russia',
			brand: 'Петрович',
			imgUrl: 'https://www.shtoranadom.ru/media/catalog/product/cache/1/image/800x/85e4522595efc69f496374d01ef2bf13/t/e/tex_republic_83510_2.jpg',
			material: 'Блэкаут',
			productType: 'Шторы',
			title: 'Шторы для комнаты',
			price: 17000,
			currency: 'BYN'
		};

		// this.apiService.createProduct(product)
		// .subscribe((product) => {
		// 	console.log(product);
		// });

		this.apiService.getAllProducts()
		.subscribe(products => {
			console.log(products);

		})

  }

}
