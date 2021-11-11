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
    const observable1$ = this.multimediaService.myObservable1$
    .subscribe(
      (responseOk) => { //TODO: next()
        console.log('Funciona perfecto', responseOk);
        
      },
      (responseFail) => { //TODO: error()
        console.log('Algo salio mal', responseFail);
        
      }
    )
  

    this.listObservers$ = [observable1$];
  }

  ngOnDestroy():void {
    this.listObservers$.forEach(u => u.unsubscribe());
    console.log('boom');
  }
}
