import { Component } from '@angular/core';
import { Expedicion, Proveedor } from './model/trekking.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="trekking-front"
  active_link = "home"
  proveedorSeleccionado: Proveedor = {} as Proveedor;
  expedicionSeleccionada: Expedicion = {} as Expedicion;

  click(buttonClicked:any){
    this.active_link = buttonClicked
  }

  clickProveedor(proveedor: any){
    console.log(proveedor)
    this.active_link = "proveedor-detalle"
    this.proveedorSeleccionado = proveedor;
  }

  clickExpedicion(expedicion: any){
    console.log(expedicion)
    this.active_link = "expedicion-detalle"
    this.expedicionSeleccionada = expedicion;
  }
}
