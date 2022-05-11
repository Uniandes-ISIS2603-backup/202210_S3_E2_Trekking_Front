import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguroDetalleComponent } from './seguro-detalle.component';
import { CaracteristicasListaModule } from '../components/caracteristicas-lista/caracteristicas-lista.module';
import { ClientesListaModule } from '../components/clientes-lista/clientes-lista.module';
import { CondicionesListaModule } from '../components/condiciones-lista/condiciones-lista.module';

@NgModule({
  imports: [
    CommonModule,
    CaracteristicasListaModule,
    ClientesListaModule,
    CondicionesListaModule
  ],
  declarations: [SeguroDetalleComponent],
  exports: [SeguroDetalleComponent]
})
export class SeguroDetalleModule { }
