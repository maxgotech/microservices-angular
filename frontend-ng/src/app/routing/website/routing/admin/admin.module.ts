import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderModule } from 'src/app/view/admin-header/admin-header.module';
import { FooterModule } from 'src/app/view/footer/footer.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminHomeModule } from 'src/app/view/admin-home/admin-home.module';

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminHeaderModule,
    FooterModule,
    MatDialogModule,
    AdminHomeModule,
    RouterModule.forChild([
      {
          path: '',
          pathMatch: 'full',
          component: AdminPageComponent
      }
    ])
  ]
})
export class AdminModule { }
