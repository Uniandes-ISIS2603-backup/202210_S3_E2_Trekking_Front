import * as L from 'leaflet';
import 'leaflet-routing-machine';
import {icon, Marker } from 'leaflet';


import { Component, Input, OnInit } from '@angular/core';
import { Expedicion } from 'src/app/model/trekking.model';
import { Map, tileLayer} from 'leaflet';


export const DEFAULT_LAT = 48.20807;
export const DEFAULT_LON =  16.37320;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-mapa-card',
  templateUrl: './mapa-card.component.html',
  styleUrls: ['./mapa-card.component.css']
})
export class MapaCardComponent implements OnInit {

  @Input() public expedicion:Expedicion = {} as Expedicion;


  longitudDefecto : number;
  latitudDefecto : number;
  constructor() {
    this.latitudDefecto = 4.60971;
    this.longitudDefecto =  -74.08175;

  }

  getLatitud() : number{
    return this.expedicion.mapa.latitud1;
  }

  getLongitud() : number{
    return this.expedicion.mapa.longitud1;
  }

  getLatitud2() : number{
    return this.expedicion.mapa.latitud2;
  }

  getLongitud2() : number{
    return this.expedicion.mapa.longitud2;
  }

  ngOnInit() {
    this.initMap();
  }

  private initMap(): void {
    //configuración del mapa
    const map = new Map('map', {
      center: [this.getLatitud(),this.getLongitud()],
      attributionControl: false,
      zoom: 14
    });


    //ruta entre los dos puntos

    L.Routing.control({
      waypoints: [
         L.latLng(this.getLatitud(), this.getLongitud()),
         L.latLng(this.getLatitud2(), this.getLongitud2()) ],

        showAlternatives: false,
        fitSelectedRoutes: true,
        show: false,
        routeWhileDragging: false,
        useZoomParameter: true

      }).addTo(map);



    //iconos personalizados
    var iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
   L.Marker.prototype.options.icon = iconDefault;

    //titulo
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
    });


    tiles.addTo(map);
  }
}
