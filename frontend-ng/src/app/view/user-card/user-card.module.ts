import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardUiComponent } from './ui/user-card-ui/user-card-ui.component';
import { UserCardBlockComponent } from './block/user-card-block/user-card-block.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserCardUiComponent,
    UserCardBlockComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule
  ],
  exports:[UserCardBlockComponent]
})
export class UserCardModule { }
