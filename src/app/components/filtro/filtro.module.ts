import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro.component';
import { ProveedoresModule } from 'src/app/proveedores/proveedores.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FiltroComponent],
  exports: [FiltroComponent]
})
export class FiltroModule { }
