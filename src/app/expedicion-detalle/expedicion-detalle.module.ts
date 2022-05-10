import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionDetalleComponent } from './expedicion-detalle.component';
import { ExpedicionGaleriaModule } from '../components/expedicion-galeria/expedicion-galeria.module';

@NgModule({
  imports: [
    CommonModule,
    ExpedicionGaleriaModule
  ],
  declarations: [ExpedicionDetalleComponent],
  exports: [ExpedicionDetalleComponent]
})
export class ExpedicionDetalleModule { }
