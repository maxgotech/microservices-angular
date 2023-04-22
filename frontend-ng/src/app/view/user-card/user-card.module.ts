import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardUiComponent } from './ui/user-card-ui/user-card-ui.component';
import { UserCardBlockComponent } from './block/user-card-block/user-card-block.component';



@NgModule({
  declarations: [
    UserCardUiComponent,
    UserCardBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[UserCardBlockComponent]
})
export class UserCardModule { }
