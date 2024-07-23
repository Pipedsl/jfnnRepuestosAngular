import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '@environments/environments';
import { Observable } from 'rxjs';
import { Contacto } from '../interfaces/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private baseUrl = environments.baseUrl;

  constructor(private http: HttpClient) { }

  addContacto(contacto: Contacto): Observable<Contacto>{
    return this.http.post<Contacto>(`${this.baseUrl}gateway/contacto`, contacto);
  }
}
