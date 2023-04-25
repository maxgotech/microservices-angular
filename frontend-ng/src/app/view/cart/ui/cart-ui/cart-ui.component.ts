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
  price:number=0;

  constructor( private authService: AuthService, private userService:UserService, private cartService:CartService, private productService:ProductService){
    this.userService.UserData(this.mail).subscribe((Response:User)=>{
    this.user=Response; // UserDto текущего пользователя
    this.getCarts(this.user.id);
    });
  }

  getCarts(id:number){
    this.cartService.ReturnCarts(id).subscribe((data) => {
    this.carts=data;
    this.price=0;
    for (var dat of data){
      this.price = this.price+dat.product.price;
    }
    });
  }

  deleteCart(id:number){
    this.cartService.DeleteCart(id).subscribe((data)=>{
      console.log('cart deleted');
    })
    this.getCarts(this.user!.id);;
  }

}
