import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // METODO PARA VALIDAR LAS CREDENCIALES DEL LOGIN
  sendCredentials(email: string, password: string): void {
    console.log('servicio cargado', email, password);
  }
}
