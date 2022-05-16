import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItinerarioDetalleComponent } from './itinerario-detalle/itinerario-detalle.component';

const routes: Routes = [
  {
    path: 'itinerarios',
    children: [
      {
        path: ':id',
        component: ItinerarioDetalleComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerarioRoutingModule {}
