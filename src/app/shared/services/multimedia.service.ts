import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  calback:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
