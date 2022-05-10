import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionCardComponent } from './expedicion-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpedicionCardComponent],
  exports: [ExpedicionCardComponent]
})
export class ExpedicionCardModule { }
