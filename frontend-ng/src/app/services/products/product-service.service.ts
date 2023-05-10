import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly http: HttpClient) { }

  NewProduct(name:string, price:number , id_createdBy:number, url_image:string, about:string) {
		return this.http.post<any>('/product/newproduct',{ name , price , id_createdBy, url_image, about });
	}

  ReturnProducts(){
    return this.http.post<any>('/product/productlist', {});
  }

}
