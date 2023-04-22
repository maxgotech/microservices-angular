import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
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
