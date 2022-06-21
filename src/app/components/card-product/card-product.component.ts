import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/interfaces-global';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  constructor() { }

	@Input('product') public product: Product | null = null;

  ngOnInit(): void {
  }

}
