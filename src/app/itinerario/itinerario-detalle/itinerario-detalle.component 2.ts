import { Component, OnInit, Input } from '@angular/core';
import { Expedicion, Itinerario, Recomendacion } from '../model/trekking.model';

@Component({
  selector: 'app-itinerario-detalle',
  templateUrl: './itinerario-detalle.component.html',
  styleUrls: ['./itinerario-detalle.component.css']
})
export class ItinerarioDetalleComponent implements OnInit {

  @Input() public itinerario:Itinerario = {} as Itinerario;
  constructor() { }

  ngOnInit() {
  }

}
