import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './proveedores.component';
import { ProveedorCardComponent } from '../components/proveedor-card/proveedor-card.component';
import { ProveedorCardModule } from '../components/proveedor-card/proveedor-card.module';

@NgModule({
  imports: [
    CommonModule,
    ProveedorCardModule
  ],
  declarations: [ProveedoresComponent],
  exports: [ProveedoresComponent]
})
export class ProveedoresModule { }
