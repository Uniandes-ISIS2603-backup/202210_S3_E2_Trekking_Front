import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorCardComponent } from './proveedor-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProveedorCardComponent],
  exports: [ProveedorCardComponent]
})
export class ProveedorCardModule { }
