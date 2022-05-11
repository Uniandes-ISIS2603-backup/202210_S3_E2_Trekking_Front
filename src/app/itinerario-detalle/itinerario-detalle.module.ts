import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItinerarioDetalleComponent } from './itinerario-detalle.component';
import { ExpedicionGaleriaModule } from '../components/expedicion-galeria/expedicion-galeria.module';

@NgModule({
  imports: [
    CommonModule,
    ExpedicionGaleriaModule
  ],
  declarations: [ItinerarioDetalleComponent],
  exports: [ItinerarioDetalleComponent]
})
export class ItinerarioDetalleModule { }
