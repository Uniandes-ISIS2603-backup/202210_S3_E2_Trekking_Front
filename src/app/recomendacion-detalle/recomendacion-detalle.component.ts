import { Component, OnInit, Input } from '@angular/core';
import { Expedicion, Itinerario, Recomendacion } from '../model/trekking.model';

@Component({
  selector: 'app-recomendacion-detalle',
  templateUrl: './recomendacion-detalle.component.html',
  styleUrls: ['./recomendacion-detalle.component.css']
})
export class RecomendacionDetalleComponent implements OnInit {

  @Input() public recomendacion:Recomendacion = {} as Recomendacion;
  constructor() { }

  ngOnInit() {
  }

}
