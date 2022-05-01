import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionDetalleComponent } from './expedicion-detalle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpedicionDetalleComponent],
  exports: [ExpedicionDetalleComponent]
})
export class ExpedicionDetalleModule { }
