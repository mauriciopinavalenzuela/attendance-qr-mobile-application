
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPalabra, IPalabras, Users } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiCrudService {
  constructor(private httpClient: HttpClient) { }

  CrearPalabra(newPalabra: IPalabra): Observable<IPalabra> {
    return this.httpClient.post<IPalabra>(`${environment.apiUrl}/palabras`, newPalabra);
  }

  listarUsuarios(): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  CrearUsuario(newUsuario: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  BuscarUsuarioPorId(id: number): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?id=${id}`);
  }

  ActualizarUsuario(usuario: any): Observable<Users> {
    return this.httpClient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }

  EliminarUsuario(usuario:any): Observable<Users>{
    return this.httpClient.delete<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`);
  }
}
