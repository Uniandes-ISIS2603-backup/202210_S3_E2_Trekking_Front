import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguroListComponent } from './seguro-list/seguro-list.component';
import { SeguroDetalleComponent } from './seguro-detalle/seguro-detalle.component';
import { SeguroCardModule } from '../components/seguro-card/seguro-card.module';
import { FiltroModule } from '../components/filtro/filtro.module';
import { SeguroRoutingModule } from './seguro-routing.module';
import { CaracteristicasListaModule } from '../components/caracteristicas-lista/caracteristicas-lista.module';
import { ClientesListaModule } from '../components/clientes-lista/clientes-lista.module';
import { CondicionesListaModule } from '../components/condiciones-lista/condiciones-lista.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipeSeguro';

@NgModule({
  imports: [
    CommonModule,
    SeguroCardModule,
    FiltroModule,
    CaracteristicasListaModule,
    ClientesListaModule,
    CondicionesListaModule,
    SeguroRoutingModule,
    FormsModule,
  ],
  declarations: [SeguroListComponent, SeguroDetalleComponent, FilterPipe],
  exports: [SeguroListComponent]
})
export class SeguroModule { }
