import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginUiComponent } from 'src/app/view/login/ui/login-ui/login-ui.component';
import { AuthService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-header-ui',
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.scss']
})
export class HeaderUiComponent {
  public loggedIn = false;

  ngOnInit(): void {
    this.loggedIn = !!this.authService.currentUserValue;
  }


  constructor(public dialog: MatDialog, private authService: AuthService) {
  }  

  openLog() {
    const dialogRef = this.dialog.open(LoginUiComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
