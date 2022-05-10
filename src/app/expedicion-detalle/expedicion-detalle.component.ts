import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expedicion, Itinerario, Recomendacion } from '../model/trekking.model';

@Component({
  selector: 'app-expedicion-detalle',
  templateUrl: './expedicion-detalle.component.html',
  styleUrls: ['./expedicion-detalle.component.css']
})
export class ExpedicionDetalleComponent implements OnInit {

  @Input() public expedicion:Expedicion = {} as Expedicion;
  @Output() clickRecom = new EventEmitter<Recomendacion>();
  @Output() clickItin = new EventEmitter<Itinerario>();

  constructor() { }

  ngOnInit() {
  }

  clickRecomendacion(recomendacion:Recomendacion){
    this.clickRecom.emit(recomendacion);
  }

  clickItinerario(itinerario:Itinerario){
    this.clickItin.emit(itinerario);
  }

}
