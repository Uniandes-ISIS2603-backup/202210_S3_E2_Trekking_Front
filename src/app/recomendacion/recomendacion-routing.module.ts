import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecomendacionDetalleComponent } from './recomendacion-detalle/recomendacion-detalle.component';

const routes: Routes = [
  {
    path: 'recomendaciones',
    children: [
      {
        path: ':id',
        component: RecomendacionDetalleComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendacionRoutingModule {}
