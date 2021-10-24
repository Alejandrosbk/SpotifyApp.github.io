import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SongsModel } from '@core/models/songs.model-interface';
import { observable, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  // DECLARAMOS UNA PROPIEDAD DE SOLO LECTURA CON LA VARIABLE API
  private readonly URL = environment.api;

  constructor( private httpClient: HttpClient ) { 

  }

  getAllSongs$():Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
  }
}
