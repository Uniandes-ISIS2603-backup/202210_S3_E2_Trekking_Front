import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionDetalleComponent } from './expedicion-detalle.component';
import { ExpedicionGaleriaModule } from '../components/expedicion-galeria/expedicion-galeria.module';
import { MapaCardComponent } from '../components/mapa-card/mapa-card.component';

@NgModule({
  imports: [
    CommonModule,
    ExpedicionGaleriaModule
  ],
  declarations: [ExpedicionDetalleComponent,MapaCardComponent],
  exports: [ExpedicionDetalleComponent]
})
export class ExpedicionDetalleModule { }
