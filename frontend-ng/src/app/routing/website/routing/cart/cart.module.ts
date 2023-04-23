import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/view/header/header.module';
import { FooterModule } from 'src/app/view/footer/footer.module';
import { CartBlockModule } from 'src/app/view/cart/cart.module';

@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    CartBlockModule,
    RouterModule.forChild([
      {
          path: '',
          pathMatch: 'full',
          component: CartPageComponent
      }
    ])
  ],
})
export class CartModule { }
