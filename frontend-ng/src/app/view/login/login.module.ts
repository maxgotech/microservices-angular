import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUiComponent } from './ui/login-ui/login-ui.component';
import { LoginBlockComponent } from './block/login-block/login-block.component';



@NgModule({
  declarations: [
    LoginUiComponent,
    LoginBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LoginBlockComponent]
})
export class LoginModule { }
