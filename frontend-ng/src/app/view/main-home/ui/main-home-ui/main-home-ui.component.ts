import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/products/product-service.service';

@Component({
  selector: 'app-main-home-ui',
  templateUrl: './main-home-ui.component.html',
  styleUrls: ['./main-home-ui.component.scss']
})
export class MainHomeUiComponent {
  products:any =[];

  constructor( private productService:ProductService){
    this.getProducts();
  }

  getProducts(){
    this.productService.ReturnProducts().subscribe((data) => {
    this.products = data;
    })
  }

}

