import { Component, OnInit, Input } from '@angular/core';
import { Expedicion, Itinerario, Recomendacion } from '../model/trekking.model';

@Component({
  selector: 'app-expedicion-detalle',
  templateUrl: './expedicion-detalle.component.html',
  styleUrls: ['./expedicion-detalle.component.css']
})
export class ExpedicionDetalleComponent implements OnInit {

  @Input() public expedicion:Expedicion = {} as Expedicion;
  itinerarios: Array<Itinerario> = [];
  recomendacion: Array<Recomendacion> = [];
  constructor() { }

  ngOnInit() {
  }

}
