import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Itinerario } from '../model/trekking.model';

@Injectable({
  providedIn: 'root'
})
export class TrekkingService {

  private apiUrl = environment.baseUrl + 'api/';

  constructor(private http: HttpClient) { }

  getItinerarios(): Observable<Itinerario[]> {
    return this.http.get<Itinerario[]>(this.apiUrl);
  }
}
