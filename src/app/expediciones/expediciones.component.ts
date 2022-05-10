import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrekkingService } from '../services/trekking.service';
import { Expedicion, Proveedor } from '../model/trekking.model';

@Component({
  selector: 'app-expediciones',
  templateUrl: './expediciones.component.html',
  styleUrls: ['./expediciones.component.css']
})
export class ExpedicionesComponent implements OnInit {

  expediciones: Array<Expedicion> = [];
  @Output() clickDetalle = new EventEmitter<Expedicion>();

  constructor(private trekkingService: TrekkingService) { }

  ngOnInit() {
    this.getExpediciones()
  }

  getExpediciones(){
    this.trekkingService.getExpediciones().subscribe(expediciones => {
      this.expediciones = expediciones
      console.log(expediciones)
    });
  }

  clickExpedicion(expedicion:Expedicion){
    this.clickDetalle.emit(expedicion);
  }

}
