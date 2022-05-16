import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendacionDetalleComponent } from './recomendacion-detalle/recomendacion-detalle.component';
import { ExpedicionGaleriaModule } from '../components/expedicion-galeria/expedicion-galeria.module';
import { RecomendacionRoutingModule } from './recomendacion-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RecomendacionRoutingModule
  ],
  declarations: [RecomendacionDetalleComponent],
  exports: [RecomendacionDetalleComponent]
})
export class RecomendacionModule { }
