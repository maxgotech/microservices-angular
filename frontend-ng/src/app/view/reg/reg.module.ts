import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegBlockComponent } from './block/reg-block/reg-block.component';
import { RegUiComponent } from './ui/reg-ui/reg-ui.component';



@NgModule({
  declarations: [
    RegBlockComponent,
    RegUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[RegBlockComponent]
})
export class RegModule { }
