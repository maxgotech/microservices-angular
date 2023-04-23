import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserCardUiComponent } from './ui/admin-user-card-ui/admin-user-card-ui.component';
import { AdminUserCardBlockComponent } from './block/admin-user-card-block/admin-user-card-block.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminUserCardUiComponent,
    AdminUserCardBlockComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule
  ],
  exports:[AdminUserCardBlockComponent]
})
export class AdminUserCardModule { }
