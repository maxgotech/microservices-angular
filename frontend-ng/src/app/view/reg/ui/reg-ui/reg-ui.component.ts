import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegService } from 'src/app/services/reg/reg-service.service';

@Component({
  selector: 'app-reg-ui',
  templateUrl: './reg-ui.component.html',
  styleUrls: ['./reg-ui.component.scss']
})
export class RegUiComponent implements OnInit {
  public showPassword: boolean = false;
  public show2Password: boolean = false;

  name: string | undefined;
  secondname: string | undefined;
  mail: string | undefined;
  password: string | undefined;

  public togglePasswordVisibility(): void { //иконка пароля
    this.showPassword = !this.showPassword;
  }

  public toggle2PasswordVisibility(): void { //иконка проверки пароля
    this.show2Password = !this.show2Password;
  }

  formGroup!: FormGroup

  @Input() formError = '';
  @Output() login = new EventEmitter();

  constructor(private regService: RegService){}

  ngOnInit():void{


    ///Разбито чтобы ошибки выходили на каждое окно отдельно а не вместе
    this.formGroup = new FormGroup({ 
      mail: new FormControl('',[Validators.required, Validators.email]),
      pass: new FormControl('',[Validators.required]),
      secondpass: new FormControl('',[Validators.required]),
      name: new FormControl('',[Validators.required]),
      secondname: new FormControl('',[Validators.required])
  });
  }


  reg(){
    this.name =(<HTMLInputElement>document.getElementById("NameInput")).value;
    this.secondname =(<HTMLInputElement>document.getElementById("SecondNameInput")).value;
    this.mail =(<HTMLInputElement>document.getElementById("MailInput")).value;
    this.password =(<HTMLInputElement>document.getElementById("PassInput")).value;
    this.regService.register(this.name,this.secondname,this.mail,this.password).subscribe(data => console.log("you are registered"))
  }

}
