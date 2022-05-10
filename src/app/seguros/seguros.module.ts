import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurosComponent } from './seguros.component';
import { SeguroCardModule } from '../components/seguro-card/seguro-card.module';

@NgModule({
  imports: [
    CommonModule,
    SeguroCardModule
  ],
  declarations: [SegurosComponent],
  exports: [SegurosComponent]
})
export class SegurosModule { }
