import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeguroListComponent } from './seguro-list/seguro-list.component';
import { SeguroDetalleComponent } from './seguro-detalle/seguro-detalle.component';

const routes: Routes = [
  {
    path: 'seguros',
    children: [
      {
        path: 'list',
        component: SeguroListComponent,
      },
      {
        path: ':id',
        component: SeguroDetalleComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguroRoutingModule {}
