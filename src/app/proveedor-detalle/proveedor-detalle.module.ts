import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorDetalleComponent } from './proveedor-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProveedorDetalleComponent],
  exports: [ProveedorDetalleComponent]
})
export class ProveedorDetalleModule { }
