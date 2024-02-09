import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FatherComponent } from './father/father.component';
import { KidComponent } from './kid/kid.component';
import { Kid2Component } from './kid2/kid2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , FatherComponent , KidComponent ,Kid2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
