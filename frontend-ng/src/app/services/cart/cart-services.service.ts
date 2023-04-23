import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private readonly http: HttpClient) { }

  NewCart( id_product:number , id_user:number) {
		return this.http.post<any>('/cart/newcart',{ id_product , id_user });
	}

    ReturnCarts(id_user:number){
        return this.http.post<any>('/cart/cartlist', { id_user });
      }

}
