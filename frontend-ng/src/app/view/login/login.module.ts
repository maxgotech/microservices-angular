import { NgModule } from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LoginUiComponent } from './ui/login-ui/login-ui.component';
import { LoginBlockComponent } from './block/login-block/login-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RegModule } from '../reg/reg.module';


@NgModule({
  declarations: [
    LoginUiComponent,
    LoginBlockComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    RegModule
  ],
  exports:[LoginBlockComponent]
})
export class LoginModule { }
