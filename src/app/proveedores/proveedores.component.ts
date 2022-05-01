import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TrekkingService } from '../services/trekking.service'
import { Proveedor } from '../model/trekking.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

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
