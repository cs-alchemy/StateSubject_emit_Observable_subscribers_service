import { Component, OnInit } from '@angular/core';
import { StateStoreService } from '../services/state-store.service';

@Component({
  selector: 'app-kid2',
  standalone: true,
  imports: [],
  templateUrl: './kid2.component.html',
  styleUrl: './kid2.component.css'
})
export class Kid2Component implements OnInit {

  fromStore:any= 'default'

  constructor(private stateStore:StateStoreService){}

  ngOnInit(): void {
           
    this.stateStore.getState().subscribe((data)=>{ 
      this.fromStore = data
    })
  }

}
