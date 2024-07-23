import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '@environments/environments';
import { Cotizacion } from '../interfaces/cotizacion.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {
  private baseUrl = environments.baseUrl;

  constructor(private http: HttpClient) { }

  addCotizacion(cotizacion: Cotizacion): Observable<Cotizacion>{
    return this.http.post<Cotizacion>(`${this.baseUrl}gateway/cotizacion`, cotizacion);
  }
}
