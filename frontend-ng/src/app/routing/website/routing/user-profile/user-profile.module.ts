import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/view/header/header.module';
import { FooterModule } from 'src/app/view/footer/footer.module';
import { UserProfileBlockModule } from 'src/app/view/user-profile/user-profile.module';

@NgModule({
  declarations: [
    UserProfilePageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    UserProfileBlockModule,
    RouterModule.forChild([
      {
          path: '',
          pathMatch: 'full',
          component: UserProfilePageComponent
      }
    ])
  ],
})
export class UserProfileModule { }
