import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionListComponent } from './expedicion-list/expedicion-list.component';
import { ExpedicionCardModule } from '../components/expedicion-card/expedicion-card.module';
import { FiltroModule } from '../components/filtro/filtro.module';
import { ExpedicionRoutingModule } from './expedicion-routing.module';
import { ExpedicionGaleriaModule } from '../components/expedicion-galeria/expedicion-galeria.module';
import { ExpedicionDetalleComponent } from './expedicion-detalle/expedicion-detalle.component';
import { MapaModule } from '../components/mapa-card/mapa-card.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe3 } from './pipeExpedicion';

@NgModule({
  imports: [
    CommonModule,
    ExpedicionCardModule,
    FiltroModule,
    ExpedicionRoutingModule,
    ExpedicionGaleriaModule,
    MapaModule,
    FormsModule
  ],
  declarations: [ExpedicionListComponent,ExpedicionDetalleComponent,FilterPipe3],
  exports: [ExpedicionListComponent]
})
export class ExpedicionModule { }
