import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FooterModule } from 'src/app/view/footer/footer.module';
import { HeaderModule } from 'src/app/view/header/header.module';
import { MainHomeModule } from 'src/app/view/main-home/main-home.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    MainHomeModule,
    RouterModule.forChild([
      {
          path: '',
          pathMatch: 'full',
          component: HomePageComponent
      }
    ])
  ]
})
export class HomeModule { }
