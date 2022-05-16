import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorListComponent } from './proveedor-list/proveedor-list.component';
import { ProveedorDetalleComponent } from './proveedor-detalle/proveedor-detalle.component';

const routes: Routes = [
  {
    path: 'proveedores',
    children: [
      {
        path: 'list',
        component: ProveedorListComponent,
      },
      {
        path: ':id',
        component: ProveedorDetalleComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorRoutingModule {}
