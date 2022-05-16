import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrekkingService } from 'src/app/services/trekking.service';
import { Proveedor } from '../../model/trekking.model';

@Component({
  selector: 'app-proveedor-detalle',
  templateUrl: './proveedor-detalle.component.html',
  styleUrls: ['./proveedor-detalle.component.css']
})
export class ProveedorDetalleComponent implements OnInit {

  proveedorId!: string;
  @Input() public proveedor:Proveedor = {} as Proveedor;

  constructor(
    private route: ActivatedRoute,
    private trekkingService: TrekkingService) { }

  getProveedor(){
    this.trekkingService.getProveedor(this.proveedorId).subscribe(proveedor=>{
      this.proveedor = proveedor;
    })
  }

  ngOnInit() {
    if(Object.keys(this.proveedor).length === 0){
      this.proveedorId = this.route.snapshot.paramMap.get('id')!
      if(this.proveedorId){
        this.getProveedor();
      }
    }
  }

}
