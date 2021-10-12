import { SongsModel } from '@core/models/songs.model-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
    // Definimos las condiciones y la estructura de los datos que se cargaran en el componente
    @Input() mode: 'small' | 'big' = 'big'
    @Input() track: SongsModel = { _id: 0, name: '', album: '', url: '', cover: '' };

  constructor() { }

  ngOnInit(): void {
  }

}
