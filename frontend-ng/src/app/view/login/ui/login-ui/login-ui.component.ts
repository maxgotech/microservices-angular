import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegUiComponent } from 'src/app/view/reg/ui/reg-ui/reg-ui.component';
import { AuthService } from 'src/app/services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss']
})
export class LoginUiComponent implements OnInit {
  public showPassword: boolean = false;
  mail: string | undefined;
  password: string | undefined;
  currentUser = this.authService.currentUserValue;

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  formGroup!: FormGroup

  @Input() formError = '';

  constructor(public dialog: MatDialog, private authService : AuthService, private router : Router){
    
  }

  openReg() {
    const dialogRef = this.dialog.open(RegUiComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ///Разбито чтобы ошибки выходили на каждое окно отдельно а не вместе
  ngOnInit():void{
    this.formGroup = new FormGroup({
      mail: new FormControl('',[Validators.required, Validators.email]),
      pass: new FormControl('',[Validators.required])
  });
  }

  log(){
    this.mail =(<HTMLInputElement>document.getElementById("MailInput")).value;
    this.password =(<HTMLInputElement>document.getElementById("PassInput")).value;
    this.authService.login(this.mail,this.password).subscribe(data => 
      { if(data.type=='user')
      {
        this.dialog.closeAll();
      } else {
        this.router.navigate(['/admin']);
        this.dialog.closeAll();
      }
      }
    )
  }

}
