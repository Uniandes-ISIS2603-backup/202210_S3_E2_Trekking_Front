import { Component } from '@angular/core';
import { Proveedor } from './model/trekking.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="trekking-front"
  active_link = "home"
  proveedorSeleccionado: Proveedor = {} as Proveedor ;

  click(buttonClicked:any){
    this.active_link = buttonClicked
  }

  clickProveedor(proveedor: any){
    console.log(proveedor)
    this.active_link = "proveedor-detalle"
    this.proveedorSeleccionado = proveedor;
  }
}
