import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;

  constructor( private http: HttpClient ) { }

  // METODO PARA VALIDAR LAS CREDENCIALES DEL LOGIN
  sendCredentials(email: string, password: string): Observable<any> {
    const body = { // ALMACENAMOS LO QUE EL BODY DE LA API REQUIERE
      email,
      password
    }
    return this.http.post(`${this.URL}/auth/login`, body);
  }
}
