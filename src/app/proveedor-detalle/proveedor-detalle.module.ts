import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorDetalleComponent } from './proveedor-detalle.component';
import { ExpedicionListaModule } from '../components/expedicion-lista/expedicion-lista.module';

@NgModule({
  imports: [
    CommonModule,
    ExpedicionListaModule
  ],
  declarations: [ProveedorDetalleComponent],
  exports: [ProveedorDetalleComponent]
})
export class ProveedorDetalleModule { }
