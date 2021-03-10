import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../models/product.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Observable<Product[]>;
  displayName: any;

  constructor(private store: Store<AppState>) {
    this.products = store.select('product');
    this.displayName = localStorage.getItem('displayname');
  }

  ngOnInit(): void {
  }
}
