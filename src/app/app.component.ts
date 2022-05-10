import { Component } from '@angular/core';
import { Expedicion, Proveedor, Seguro, Itinerario, Recomendacion } from './model/trekking.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="trekking-front"
  active_link = "home"

  seguroSeleccionado: Seguro = {} as Seguro;
  proveedorSeleccionado: Proveedor = {} as Proveedor;
  expedicionSeleccionada: Expedicion = {} as Expedicion;
  itinerarioSeleccionado: Itinerario = {} as Itinerario;
  recomendacionSeleccionada: Recomendacion = {} as Recomendacion;

  click(buttonClicked:any){
    this.active_link = buttonClicked
  }

  clickProveedor(proveedor: any){
    console.log(proveedor)
    this.active_link = "proveedor-detalle"
    this.proveedorSeleccionado = proveedor;
  }

  clickSeguro(seguro: any){
    console.log(seguro)
    this.active_link = "seguro-detalle"
    this.seguroSeleccionado = seguro;
  }

  clickExpedicion(expedicion: any){
    console.log(expedicion)
    this.active_link = "expedicion-detalle"
    this.expedicionSeleccionada = expedicion;
  }

  clickItinerario(itinerario: any){
    console.log(itinerario)
    this.active_link = "itinerario-detalle"
    this.itinerarioSeleccionado = itinerario;
  }

  clickRecomendacion(recomendacion: any){
    console.log(recomendacion)
    this.active_link = "recomendacion-detalle"
    this.recomendacionSeleccionada = recomendacion;
  }
}
