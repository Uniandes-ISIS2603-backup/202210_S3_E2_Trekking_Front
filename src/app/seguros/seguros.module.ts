import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurosComponent } from './seguros.component';
import { SeguroCardModule } from '../components/seguro-card/seguro-card.module';
import { FiltroModule } from '../components/filtro/filtro.module';

@NgModule({
  imports: [
    CommonModule,
    SeguroCardModule,
    FiltroModule
  ],
  declarations: [SegurosComponent],
  exports: [SegurosComponent]
})
export class SegurosModule { }
