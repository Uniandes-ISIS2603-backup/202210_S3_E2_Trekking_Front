import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguroCardComponent } from './seguro-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeguroCardComponent],
  exports: [SeguroCardComponent]
})
export class SeguroCardModule { }
