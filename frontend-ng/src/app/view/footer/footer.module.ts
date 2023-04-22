import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterUiComponent } from './ui/footer-ui/footer-ui.component';
import { FooterBlockComponent } from './block/footer-block/footer-block.component';



@NgModule({
  declarations: [
    FooterUiComponent,
    FooterBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FooterBlockComponent]
})
export class FooterModule { }
