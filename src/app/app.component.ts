import { Component } from '@angular/core';
import { Proveedor } from './model/trekking.model';
import { Seguro } from './model/trekking.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="trekking-front"
  active_link = "home"
  proveedorSeleccionado: Proveedor = {} as Proveedor ;
  seguroSeleccionado: Seguro = {} as Seguro;


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
}
