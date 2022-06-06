import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorCardComponent } from '../components/proveedor-card/proveedor-card.component';
import { ProveedorCardModule } from '../components/proveedor-card/proveedor-card.module';
import { FiltroModule } from '../components/filtro/filtro.module';
import { ProveedorRoutingModule } from './proveedor-routing.module';
import { ExpedicionListaModule } from '../components/expedicion-lista/expedicion-lista.module';
import { ProveedorDetalleComponent } from './proveedor-detalle/proveedor-detalle.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe2 } from './pipeProveedor';


@NgModule({
  imports: [
    CommonModule,
    ProveedorCardModule,
    FiltroModule,
    ExpedicionListaModule,
    ProveedorRoutingModule,
    FormsModule
  ],
  declarations: [ProveedorListComponent, ProveedorDetalleComponent, FilterPipe2],
  exports: [ProveedorListComponent]
})
export class ProveedorModule { }
