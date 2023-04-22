import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
          path: '',
          pathMatch: 'full',
          component: NotFoundPageComponent
      }
    ])
  ]
})
export class NotFoundModule { }
