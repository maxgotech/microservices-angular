import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderUiComponent } from './ui/admin-header-ui/admin-header-ui.component';
import { AdminHeaderBlockComponent } from './block/admin-header-block/admin-header-block.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AdminUserCardModule } from '../admin-user-card/admin-user-card.module';



@NgModule({
  declarations: [
    AdminHeaderUiComponent,
    AdminHeaderBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    AdminUserCardModule,
    RouterModule
  ],
  exports:[AdminHeaderBlockComponent]
})
export class AdminHeaderModule { }
