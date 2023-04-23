import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { UserService } from 'src/app/services/user/user-service.service';
import { CartService } from 'src/app/services/cart/cart-services.service';
import { ProductService } from 'src/app/services/products/product-service.service';

export interface User {
  id:number;
	name: string;
	secondname: string;
	mail: string;
}

@Component({
  selector: 'app-cart-ui',
  templateUrl: './cart-ui.component.html',
  styleUrls: ['./cart-ui.component.scss']
})
export class CartUiComponent {
  user:User | undefined;
  currentUser = this.authService.currentUserValue;
  mail = this.currentUser.mail; // почта текущего пользователя
  name: string | undefined; // название товара
  carts:any =[];
  products:any =[];

  constructor( private authService: AuthService, private userService:UserService, private cartService:CartService, private productService:ProductService){
    this.userService.UserData(this.mail).subscribe((Response:User)=>{
    this.user=Response; // UserDto текущего пользователя
    this.getCarts(this.user.id);
    });
  }

  getProducts(){
    this.productService.ReturnProducts().subscribe((data) => {
    this.products = data;
    })
  }

  getCarts(id:number){
    this.cartService.ReturnCarts(id).subscribe((data) => {
    this.getProducts();
    this.carts=data;
    console.log(data);
    })
  }

}
