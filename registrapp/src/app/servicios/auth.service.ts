import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAsistencia, Users } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  registrarUsuario(nuevoUsuario: Users): Observable<Users> {
    return this.httpClient.post<Users>(`${environment.apiUrl}/usuarios`, nuevoUsuario);
  }

  BuscarUsuarioId(usuarioID: number): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/${usuarioID}`);
  }

  ActualizarUsuario(usuario: Users): Observable<Users> {
    return this.httpClient.put<Users>(`${environment.apiUrl}/usuarios/${usuario.id}`, usuario);
  }

  getAllUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${environment.apiUrl}/usuarios`);
  }

  getUserById(username: string): Observable<Users> {
    return this.httpClient.get<Users>(`${environment.apiUrl}/usuarios/?username=${username}`);
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') !== null;
  }

  getUserRole() {
    return sessionStorage.getItem('userrole') !== null ? sessionStorage.getItem('userrole')?.toString() : '';
  }

  isExistent() {
    return this.isLoggedIn();
  }


  getAsignaturasByUsername(username: string): Observable<{ asignatura1: string, asignatura2: string }> {
    return this.httpClient.get<{ asignatura1: string, asignatura2: string }[]>(`${environment.apiUrl}/usuarios/?username=${username}`)
      .pipe(
        map((users: { asignatura1: string, asignatura2: string }[]) => {
          const user = users[0]; // Suponiendo que solo hay un usuario con ese nombre de usuario
          return { asignatura1: user?.asignatura1, asignatura2: user?.asignatura2 };
        })
      );
  }

  getDataByUsername(username: string): Observable<Users | undefined> {
    return this.httpClient.get<Users[]>(`${environment.apiUrl}/usuarios/?username=${username}`)
      .pipe(
        map(users => users.find(user => user.username === username))
      );
  }

  registrarAsistencia(asistencia: IAsistencia): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/asistencias`, asistencia);
  }

  logout() {
    // Limpiar cualquier información de autenticación, por ejemplo, eliminar los elementos de sessionStorage
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userrole');
  }
}
