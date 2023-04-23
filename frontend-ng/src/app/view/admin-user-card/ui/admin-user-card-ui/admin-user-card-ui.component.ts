import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { UserService } from 'src/app/services/user/user-service.service';

export interface User {
	name: string;
	secondname: string;
	mail: string;
  type: string;
}

@Component({
  selector: 'app-admin-user-card-ui',
  templateUrl: './admin-user-card-ui.component.html',
  styleUrls: ['./admin-user-card-ui.component.scss']
})
export class AdminUserCardUiComponent {
  user:User | undefined;
  currentUser = this.authService.currentUserValue;
  mail = this.currentUser.mail; //почта текущего пользователя

  
  currentRoute: string | undefined;


  constructor(private authService: AuthService, private userService: UserService, private router: Router){
    this.userService.UserData(this.mail).subscribe((Response:User)=>{
      this.user=Response; // UserDto текущего пользователя
    })
    
  }

  public Logout(): void {
    if(this.router.url=='/') {
      this.authService.logout();
      window.location.reload();
    } 
    else {
      this.authService.logout(); 
    }
}

}
