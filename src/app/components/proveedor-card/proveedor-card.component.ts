import { Component, OnInit, Input} from '@angular/core';
import { Proveedor } from '../../model/trekking.model';

@Component({
  selector: 'app-proveedor-card',
  templateUrl: './proveedor-card.component.html',
  styleUrls: ['./proveedor-card.component.css']
})
export class ProveedorCardComponent implements OnInit {

  @Input() public proveedor:Proveedor = {} as Proveedor;
  imagenUrl="";

  constructor() { }
  ngOnInit() {
    this.imagenUrl = this.proveedor.foto === null ? "" : this.proveedor.foto.url;
  }

}
