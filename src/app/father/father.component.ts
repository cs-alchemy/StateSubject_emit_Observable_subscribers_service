import { Component, OnInit } from '@angular/core';
import { StateStoreService } from '../services/state-store.service';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent implements OnInit{

constructor(private stateStore:StateStoreService){}

fromStore :any='default'

ngOnInit(): void {
   this.stateStore.getState().subscribe((data)=>{

   this.fromStore = data
    })

}


incState(){
  this.stateStore.incrementState()
}


}
