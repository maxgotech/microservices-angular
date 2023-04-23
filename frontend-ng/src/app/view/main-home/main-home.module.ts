import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeUiComponent } from './ui/main-home-ui/main-home-ui.component';
import { MainHomeBlockComponent } from './block/main-home-block/main-home-block.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    MainHomeUiComponent,
    MainHomeBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
  ],
  exports:[
    MainHomeBlockComponent
  ]
})
export class MainHomeModule { }
