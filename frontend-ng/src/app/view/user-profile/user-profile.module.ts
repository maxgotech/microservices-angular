import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileUiComponent } from './ui/user-profile-ui/user-profile-ui.component';
import { UserProfileBlockComponent } from './block/user-profile-block/user-profile-block.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    UserProfileUiComponent,
    UserProfileBlockComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ],
  exports:[UserProfileBlockComponent]
})
export class UserProfileBlockModule { }
