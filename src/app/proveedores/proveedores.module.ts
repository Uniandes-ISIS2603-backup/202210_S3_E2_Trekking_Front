import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './proveedores.component';
import { ProveedorCardComponent } from '../components/proveedor-card/proveedor-card.component';
import { ProveedorCardModule } from '../components/proveedor-card/proveedor-card.module';
import { FiltroModule } from '../components/filtro/filtro.module';


@NgModule({
  imports: [
    CommonModule,
    ProveedorCardModule,
    FiltroModule
  ],
  declarations: [ProveedoresComponent],
  exports: [ProveedoresComponent]
})
export class ProveedoresModule { }
