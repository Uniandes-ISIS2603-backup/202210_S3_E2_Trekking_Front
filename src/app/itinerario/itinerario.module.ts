import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItinerarioDetalleComponent } from './itinerario-detalle/itinerario-detalle.component';
import { ExpedicionGaleriaModule } from '../components/expedicion-galeria/expedicion-galeria.module';
import { ItinerarioRoutingModule } from './itinerario-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItinerarioRoutingModule
  ],
  declarations: [ItinerarioDetalleComponent],
  exports: [ItinerarioDetalleComponent]
})
export class ItinerarioModule { }
