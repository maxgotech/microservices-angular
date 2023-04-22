import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUiComponent } from './ui/header-ui/header-ui.component';
import { HeaderBlockComponent } from './block/header-block/header-block.component';
import { RouterModule } from '@angular/router';
import { UserCardModule } from '../user-card/user-card.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [
    HeaderUiComponent,
    HeaderBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserCardModule,
    MatIconModule,
    MatDialogModule,
    LoginModule
  ],
  exports:[HeaderBlockComponent]
})
export class HeaderModule { }
