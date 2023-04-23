import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly http: HttpClient) { }

  NewProduct(name:string, price:number , id_createdBy:number) {
		return this.http.post<any>('/product/newproduct',{ name , price , id_createdBy });
	}

  ReturnProducts(){
    return this.http.post<any>('/product/productlist', {});
  }

}
