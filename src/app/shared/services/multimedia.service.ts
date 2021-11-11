import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  calback:EventEmitter<any> = new EventEmitter<any>();

  // Observable para  
  myObservable1$:Observable<any> = new Observable();

  constructor() { 
    this.myObservable1$ = new Observable(
      (observer: Observer<any>) => {
        observer.next('Fluyendo')
    })
  }
}
