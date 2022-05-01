import { Component, OnInit, Input } from '@angular/core';
import { Proveedor } from '../model/trekking.model';

@Component({
  selector: 'app-proveedor-detalle',
  templateUrl: './proveedor-detalle.component.html',
  styleUrls: ['./proveedor-detalle.component.css']
})
export class ProveedorDetalleComponent implements OnInit {

  @Input() public proveedor:Proveedor = {} as Proveedor;

  constructor() { }

  ngOnInit() {
  }

}
