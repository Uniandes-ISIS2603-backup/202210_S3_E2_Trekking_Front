import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedicion, Itinerario, Proveedor, Recomendacion, Seguro } from '../model/trekking.model';

@Injectable({
  providedIn: 'root'
})
export class TrekkingService {

  private apiUrl = environment.baseUrl + 'api/';

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Proveedor[]> {
    const urlProveedor = this.apiUrl + 'proveedores'
    return this.http.get<Proveedor[]>(urlProveedor);
  }

  getSeguros(): Observable<Seguro[]> {
    const urlProveedor = this.apiUrl + 'seguros'
    return this.http.get<Seguro[]>(urlProveedor);
  }

  getExpediciones(): Observable<Expedicion[]> {
    const urlExpedicion = this.apiUrl + 'expediciones'
    return this.http.get<Expedicion[]>(urlExpedicion);
  }

  getProveedor(proveedorId:string){
    const urlProveedor = this.apiUrl + 'proveedores'
    return this.http.get<Proveedor>(urlProveedor + '/' + proveedorId);
  }

  getSeguro(seguroId:string){
    const urlSeguro = this.apiUrl + 'seguros'
    return this.http.get<Seguro>(urlSeguro + '/' + seguroId);
  }

  getRecomendacion(recomendacionId:string){
    const urlRecomendacion = this.apiUrl + 'recomendaciones'
    return this.http.get<Recomendacion>(urlRecomendacion + '/' + recomendacionId);
  }

  getItinerario(itinerarioId:string){
    const urlItinerario = this.apiUrl + 'itinerarios'
    return this.http.get<Itinerario>(urlItinerario + '/' + itinerarioId);
  }

  getExpedicion(expedicionId:string){
    const urlProveedor = this.apiUrl + 'expediciones'
    return this.http.get<Expedicion>(urlProveedor + '/' + expedicionId);
  }
}
