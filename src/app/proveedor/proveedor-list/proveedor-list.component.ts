import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TrekkingService } from '../../services/trekking.service'
import { Proveedor } from '../../model/trekking.model';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  proveedores: Array<Proveedor> = [];
  @Output() clickDetalle = new EventEmitter<Proveedor>();

  constructor(private trekkingService: TrekkingService) { }

  ngOnInit() {
    this.getProveedores()
  }

  getProveedores(){
    this.trekkingService.getProveedores().subscribe(proveedores => {
      this.proveedores = proveedores
      console.log(proveedores)
    });
  }

  clickProveedor(proveedor:Proveedor){
    this.clickDetalle.emit(proveedor);
  }
}
