import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { UserService } from 'src/app/services/user/user-service.service';

export interface User {
	name: string;
	secondname: string;
	mail: string;
  about: string;
}

@Component({
  selector: 'app-user-profile-ui',
  templateUrl: './user-profile-ui.component.html',
  styleUrls: ['./user-profile-ui.component.scss']
})
export class UserProfileUiComponent {
  user:User | undefined;
  currentUser = this.authService.currentUserValue;
  mail = this.currentUser.mail; // почта текущего пользователя

  constructor( private authService: AuthService, private userService:UserService){
    this.userService.UserData(this.mail).subscribe((Response:User)=>{
      this.user=Response; // UserDto текущего пользователя
    })
  }

}
