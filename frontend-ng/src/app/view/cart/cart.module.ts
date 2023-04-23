import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartUiComponent } from './ui/cart-ui/cart-ui.component';
import { CartBlockComponent } from './block/cart-block/cart-block.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    CartUiComponent,
    CartBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatButtonModule
  ],
  exports:[CartBlockComponent]
})
export class CartBlockModule { }
