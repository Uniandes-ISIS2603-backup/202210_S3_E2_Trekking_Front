import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionListComponent } from './expedicion-list/expedicion-list.component';
import { ExpedicionCardModule } from '../components/expedicion-card/expedicion-card.module';
import { FiltroModule } from '../components/filtro/filtro.module';
import { ExpedicionRoutingModule } from './expedicion-routing.module';
import { ExpedicionGaleriaModule } from '../components/expedicion-galeria/expedicion-galeria.module';
import { ExpedicionDetalleComponent } from './expedicion-detalle/expedicion-detalle.component';
import { MapaModule } from '../components/mapa-card/mapa-card.module';

@NgModule({
  imports: [
    CommonModule,
    ExpedicionCardModule,
    FiltroModule,
    ExpedicionRoutingModule,
    ExpedicionGaleriaModule,
    MapaModule
  ],
  declarations: [ExpedicionListComponent,ExpedicionDetalleComponent],
  exports: [ExpedicionListComponent]
})
export class ExpedicionModule { }
