import { Component, OnInit } from '@angular/core';
import { StateStoreService } from '../services/state-store.service';

@Component({
  selector: 'app-kid',
  standalone: true,
  imports: [],
  templateUrl: './kid.component.html',
  styleUrl: './kid.component.css'
})
export class KidComponent implements OnInit {


  fromStore:any ='default'
  constructor(private stateStore:StateStoreService){}

  ngOnInit(): void {
      
    this.stateStore.getState().subscribe((data)=>{ 
      this.fromStore = data
    })
  }
}
