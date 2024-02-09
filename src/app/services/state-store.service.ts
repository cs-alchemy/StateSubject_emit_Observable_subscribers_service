import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateStoreService {

  constructor() { }

  private stateSubject : BehaviorSubject<number> = new BehaviorSubject(-9) 


  getState():Observable<number> { 

    return this.stateSubject.asObservable()
  }

  incrementState(){ 
    const currentState = this.stateSubject.value 

    this.stateSubject.next(currentState + 1)
    console.log(`service : ${this.stateSubject.value}`)
  }
  
}
