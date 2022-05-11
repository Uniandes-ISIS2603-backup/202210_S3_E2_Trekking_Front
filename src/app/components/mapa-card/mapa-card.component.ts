import { Component, Input, OnInit } from '@angular/core';
import { Expedicion } from 'src/app/model/trekking.model';

@Component({
  selector: 'app-mapa-card',
  templateUrl: './mapa-card.component.html',
  styleUrls: ['./mapa-card.component.css']
})
export class MapaCardComponent implements OnInit {

  @Input() public expedicion:Expedicion = {} as Expedicion;

  constructor() {

  }

  getLatitud() : number{
    return this.expedicion.mapa.latitud;
  }

  getLongitud() : number{
    return this.expedicion.mapa.longitud;
  }

  ngOnInit() {
  }

}
