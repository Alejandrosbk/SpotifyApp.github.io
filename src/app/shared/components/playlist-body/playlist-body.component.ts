import { Component, OnInit } from '@angular/core';
import { SongsModel } from '@core/models/songs.model-interface';
import * as dataRaw from '../../../../assets/data/songs.json';

@Component({
  selector: 'app-playlist-body',
  templateUrl: './playlist-body.component.html',
  styleUrls: ['./playlist-body.component.css']
})
export class PlaylistBodyComponent implements OnInit {
  // USAMOS LA MISMA INTERFAZ Y AGREGAMOS EL MODELO
  tracks: Array<SongsModel> = [];

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default // USAMOS DESTRUCTURIN PARA SACAR EL APARTADO DE DATA
    this.tracks = data;
  }

}
