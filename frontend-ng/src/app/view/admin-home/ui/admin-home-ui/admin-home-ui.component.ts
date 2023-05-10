import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { ProductService } from 'src/app/services/products/product-service.service';
import { UserService } from 'src/app/services/user/user-service.service';

export interface User {
  id:number;
	name: string;
	secondname: string;
	mail: string;
}

@Component({
  selector: 'app-admin-home-ui',
  templateUrl: './admin-home-ui.component.html',
  styleUrls: ['./admin-home-ui.component.scss']
})
export class AdminHomeUiComponent {
  user:User | undefined;
  currentUser = this.authService.currentUserValue;
  mail = this.currentUser.mail; // почта текущего пользователя
  name: string | undefined; // название товара
  price: number | undefined; //цена товара
  url_image:string | undefined; // путь к фото
  about:string | undefined; //описание
  products:any =[];

  constructor( private authService: AuthService, private userService:UserService, private productService:ProductService){
    this.userService.UserData(this.mail).subscribe((Response:User)=>{
      this.user=Response; // UserDto текущего пользователя
      this.getProducts();
      });
  }

  getProducts(){
    this.productService.ReturnProducts().subscribe((data) => {
    this.products = data;
    })
  }

  createProduct(){
    this.name =(<HTMLInputElement>document.getElementById("nameInput")).value;
    this.price =(<HTMLInputElement>document.getElementById("priceInput")).valueAsNumber;
    this.url_image =(<HTMLInputElement>document.getElementById("imageUrlInput")).value;
    this.about =(<HTMLInputElement>document.getElementById("about")).value;
    this.productService.NewProduct(this.name,this.price,this.user!.id,this.url_image,this.about).subscribe(data => console.log("study created"));
    this.userService.UserData(this.mail).subscribe((Response:User)=>{
    this.user=Response; // UserDto текущего пользователя
    this.getProducts();
    });
  }

}
