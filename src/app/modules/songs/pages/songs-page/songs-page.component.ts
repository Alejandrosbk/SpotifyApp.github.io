import { Subscription } from 'rxjs';
import { SongsModel } from '@core/models/songs.model-interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SongsService } from '@modules/songs/services/songs.service';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.css']
})
export class SongsPageComponent implements OnInit, OnDestroy {
  songsTrending: Array<SongsModel> = [];
  songsRandom: Array<SongsModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor( private songsService: SongsService ) { }

  ngOnInit(): void {
    this.songsService.getAllSongs$()
    .subscribe((response: SongsModel[]) => {
      console.log('---->', response);
      
    });
  }

  ngOnDestroy():void {
    this.listObservers$.forEach(u => u.unsubscribe());
  } 

}
