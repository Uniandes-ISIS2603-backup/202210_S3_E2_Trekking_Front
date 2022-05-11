import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracteristicasListaComponent } from './caracteristicas-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CaracteristicasListaComponent],
  exports: [CaracteristicasListaComponent]
})
export class CaracteristicasListaModule { }
