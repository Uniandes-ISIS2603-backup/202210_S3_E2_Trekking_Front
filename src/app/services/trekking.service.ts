import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Expedicion, Proveedor } from '../model/trekking.model';

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

  getExpediciones(): Observable<Expedicion[]> {
    const urlExpedicion = this.apiUrl + 'expediciones'
    return this.http.get<Expedicion[]>(urlExpedicion);
  }
}
