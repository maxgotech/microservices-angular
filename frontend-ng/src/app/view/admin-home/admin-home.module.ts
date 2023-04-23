import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeUiComponent } from './ui/admin-home-ui/admin-home-ui.component';
import { AdminHomeBlockComponent } from './block/admin-home-block/admin-home-block.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    AdminHomeUiComponent,
    AdminHomeBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
  ],
  exports:[AdminHomeBlockComponent]
})
export class AdminHomeModule { }
