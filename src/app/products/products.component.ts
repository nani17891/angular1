import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  name: any;
  pwd: any;
  constructor() { }

  ngOnInit(): void {
  }
  
  login(){

  }
}
