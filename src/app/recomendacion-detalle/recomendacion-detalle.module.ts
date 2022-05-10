import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendacionDetalleComponent } from './recomendacion-detalle.component';
import { ExpedicionGaleriaModule } from '../components/expedicion-galeria/expedicion-galeria.module';

@NgModule({
  imports: [
    CommonModule,
    ExpedicionGaleriaModule
  ],
  declarations: [RecomendacionDetalleComponent],
  exports: [RecomendacionDetalleComponent]
})
export class RecomendacionDetalleModule { }
