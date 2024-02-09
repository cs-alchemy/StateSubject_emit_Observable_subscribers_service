# Frontend


• If you want to emit a new value in the observable in Angular, you can use the next method of a BehaviorSubject or a Subject from RxJS. Assuming you are using a BehaviorSubject in your StateStoreService, here's how you can emit a new value:

• Feel free to adapt this to your specific use case. The emitNewState method allows you to emit a specific value to the subscribers of the observable.

************************************************************************************************************
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateStoreService {
  
  // PRIVATE : NOT TO BE TEMPERED FROM THE OUTSIDE 
  private stateSubject: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  
  // GETTER : make is as an OBSERVABLE 
  getState(): Observable<number> {
    return this.stateSubject.asObservable();
  }

  updateState_store(): void {
    // Increment the state
    const currentState = this.stateSubject.value;
    this.stateSubject.next(currentState + 1);
    console.log(this.stateSubject.value); // Log the updated state
  }

  // Add a method to manually emit a value
  emitNewState(value: number): void {
    this.stateSubject.next(value);
    console.log(this.stateSubject.value); // Log the emitted state
  }
}

************************************************************************************************************

