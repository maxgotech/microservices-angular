import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/products/product-service.service';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { UserService } from 'src/app/services/user/user-service.service';
import { CartService } from 'src/app/services/cart/cart-services.service';

export interface User {
  id:number
	name: string;
	secondname: string;
	mail: string;
  about: string;
}

@Component({
  selector: 'app-main-home-ui',
  templateUrl: './main-home-ui.component.html',
  styleUrls: ['./main-home-ui.component.scss']
})
export class MainHomeUiComponent {
  products:any =[];
  product:number | undefined;
  user:User | undefined;
  currentUser = this.authService.currentUserValue;
  mail = this.currentUser.mail; // почта текущего пользователя


  constructor( private productService:ProductService,private authService: AuthService, private userService:UserService, private cartService:CartService){
    this.userService.UserData(this.mail).subscribe((Response:User)=>{
      this.user=Response; // UserDto текущего пользователя
    })
    this.getProducts();
  }

  getProducts(){
    this.productService.ReturnProducts().subscribe((data) => {
    this.products = data;
    })
  }

  createCart(product:number){
    this.cartService.NewCart(product,this.user!.id).subscribe((data)=>{
      console.log('CartCreated');
    });
  }

}

