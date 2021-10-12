import { SongsModel } from '@core/models/songs.model-interface';
import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../../assets/data/songs.json';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.css']
})
export class SongsPageComponent implements OnInit {
  mockTracksList: Array<SongsModel> = []

  constructor() { }

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default;
    console.log(data);
    this.mockTracksList = data;
  }

}
