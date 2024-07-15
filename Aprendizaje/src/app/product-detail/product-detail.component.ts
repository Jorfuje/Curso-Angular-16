import { Component, OnInit } from '@angular/core';
import { Product, productList } from '../product/product.mockup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productList: Product[] = productList;
  product?: Product;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = productList.find(product => product.id ==params['productId']);
    })

  }

}
