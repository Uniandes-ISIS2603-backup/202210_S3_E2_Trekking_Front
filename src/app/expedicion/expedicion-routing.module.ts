import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpedicionListComponent } from './expedicion-list/expedicion-list.component';
import { ExpedicionDetalleComponent } from './expedicion-detalle/expedicion-detalle.component';

const routes: Routes = [
  {
    path: 'expediciones',
    children: [
      {
        path: 'list',
        component: ExpedicionListComponent,
      },
      {
        path: ':id',
        component: ExpedicionDetalleComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpedicionRoutingModule {}
