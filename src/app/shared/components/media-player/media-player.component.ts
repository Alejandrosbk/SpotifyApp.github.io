import { SongsModel } from '@core/models/songs.model-interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy  {

  listObservers$: Array<Subscription> = [];  // LISTA DE OBSERVADORES PARRA VARIAS SUBSCRIPCIONES

  constructor( private multimediaService: MultimediaService ) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.calback.subscribe((response: SongsModel) => {
      console.log('recibiendo cancion', response);
    })

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy():void {
    this.listObservers$.forEach(u => u.unsubscribe());
    console.log('boom');
  }
}
